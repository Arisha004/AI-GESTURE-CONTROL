import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { drawHand } from '@/lib/draw-utils';
import { detectGesture } from '@/lib/gesture-detector';
import { toast } from 'sonner';

export default function GestureControlApp() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isModelLoading, setIsModelLoading] = useState<boolean>(false);
  const [tfReady, setTfReady] = useState<boolean>(false);
  const [detectedGesture, setDetectedGesture] = useState<string>('No gesture detected');
  const [feedback, setFeedback] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [handposeModel, setHandposeModel] = useState<any>(null);

  // Initialize TensorFlow when component mounts
  useEffect(() => {
    const initTensorflow = async () => {
      try {
        console.log("Initializing TensorFlow.js...");
        
        // Make sure the browser supports WebGL
        if (!('WebGLRenderingContext' in window)) {
          throw new Error("WebGL is not supported in this browser");
        }
        
        // Force the backend to be webgl or cpu if webgl not available
        try {
          await tf.setBackend('webgl');
          await tf.ready();
        } catch (webglErr) {
          console.warn("WebGL backend failed, trying CPU:", webglErr);
          // Try CPU as fallback
          await tf.setBackend('cpu');
          await tf.ready();
        }
        
        // Check if backend is set
        const backend = tf.getBackend();
        console.log("TensorFlow.js initialized with backend:", backend);
        
        if (!backend) {
          throw new Error("No backend was set for TensorFlow.js");
        }
        
        setTfReady(true);
        toast.success(`TensorFlow.js initialized successfully with ${backend} backend!`);
      } catch (err) {
        console.error("Failed to initialize TensorFlow:", err);
        setError(`Failed to initialize TensorFlow.js: ${err instanceof Error ? err.message : String(err)}`);
        toast.error("Failed to initialize TensorFlow.js");
      }
    };

    initTensorflow();

    // Clean up
    return () => {
      // Dispose any tensors if needed
      tf.disposeVariables();
    };
  }, []);

  // Load the handpose model with improved error handling
  const loadHandposeModel = async () => {
    if (!tfReady) {
      setError("TensorFlow.js is not ready. Please refresh the page.");
      return null;
    }

    try {
      setIsModelLoading(true);
      setError(null);
      
      console.log("Loading handpose model...");
      toast.info("Loading handpose model, please wait...");
      
      // Dynamic import with error handling
      let handposeModule;
      try {
        handposeModule = await import('@tensorflow-models/handpose');
        console.log("Handpose module imported successfully");
      } catch (importError) {
        console.error("Error importing handpose module:", importError);
        throw new Error(`Failed to import handpose module: ${importError instanceof Error ? importError.message : String(importError)}`);
      }
      
      if (!handposeModule || typeof handposeModule.load !== 'function') {
        throw new Error("Handpose module is missing the load function");
      }
      
      // Configure model with optimal settings for performance
      const modelConfig = {
        detectionConfidence: 0.7, // Slightly lower for better performance
        maxContinuousChecks: 5,
        maxNumBoxes: 1,
        iouThreshold: 0.3,
        scoreThreshold: 0.75
      };
      
      console.log("Loading model with config:", modelConfig);
      const model = await handposeModule.load(modelConfig);
      
      if (!model || typeof model.estimateHands !== 'function') {
        throw new Error("Loaded model is invalid");
      }
      
      console.log("Handpose model loaded successfully");
      setIsModelLoading(false);
      toast.success("Handpose model loaded successfully!");
      return model;
    } catch (error) {
      console.error('Error loading handpose model:', error);
      setIsModelLoading(false);
      setError(`Failed to load hand detection model: ${error instanceof Error ? error.message : String(error)}`);
      toast.error("Failed to load handpose model");
      return null;
    }
  };

  // Initialize camera with improved error handling and device selection
  const startCamera = async () => {
    setError(null);
    
    if (!tfReady) {
      setError("TensorFlow.js is not ready. Please refresh the page and try again.");
      toast.error("TensorFlow.js is not ready yet");
      return;
    }
    
    // Load the model first if not already loaded
    if (!handposeModel) {
      toast.info("Loading AI model first...");
      const model = await loadHandposeModel();
      if (!model) {
        toast.error("Failed to load the hand detection model");
        return;
      }
      setHandposeModel(model);
      toast.success("AI model ready!");
    }
    
    // Check if browser supports camera access
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError("Your browser doesn't support camera access");
      toast.error("Your browser doesn't support camera access");
      return;
    }
    
    try {
      // Get list of available devices to check camera availability
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      
      if (videoDevices.length === 0) {
        throw new Error("No camera found on this device");
      }
      
      console.log("Available video devices:", videoDevices.length);
      
      // Request camera access with optimal settings
      const constraints = {
        video: { 
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30 }
        }
      };
      
      toast.info("Requesting camera access...");
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (!videoRef.current) {
        throw new Error("Video element not available");
      }
      
      videoRef.current.srcObject = stream;
      
      // Wait for video to be ready
      videoRef.current.onloadedmetadata = () => {
        if (!videoRef.current) return;
        
        videoRef.current.play()
          .then(() => {
            setCameraActive(true);
            toast.success("Camera started successfully!");
          })
          .catch(playError => {
            console.error("Error playing video:", playError);
            setError(`Error playing video: ${playError instanceof Error ? playError.message : String(playError)}`);
            toast.error("Error starting video stream");
          });
      };
      
      // Handle errors that might occur after stream is obtained
      videoRef.current.onerror = (e) => {
        console.error("Video element error:", e);
        setError("Error with video playback");
        toast.error("Video playback error");
      };
      
    } catch (error) {
      console.error("Error accessing the camera:", error);
      setError(`Cannot access camera: ${error instanceof Error ? error.message : String(error)}`);
      toast.error("Cannot access camera. Please allow camera permissions.");
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
      setDetectedGesture('No gesture detected');
      toast.info("Camera stopped");
    }
  };

  // Detection loop with performance optimizations
  useEffect(() => {
    let requestId: number;
    let lastDetectionTime = 0;
    const DETECTION_INTERVAL = 100; // Detect at max 10 times per second to improve performance
    
    const detect = async () => {
      if (!videoRef.current || 
          !canvasRef.current || 
          videoRef.current.paused || 
          videoRef.current.ended || 
          !cameraActive || 
          !handposeModel) {
        requestId = requestAnimationFrame(detect);
        return;
      }
      
      const now = Date.now();
      const timeElapsed = now - lastDetectionTime;
      
      // Run detection at specified interval to save resources
      if (timeElapsed > DETECTION_INTERVAL) {
        lastDetectionTime = now;
        
        try {
          // Get video properties
          const video = videoRef.current;
          const { videoWidth, videoHeight } = video;
          
          // Set canvas dimensions to match video
          if (canvasRef.current.width !== videoWidth || canvasRef.current.height !== videoHeight) {
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;
            console.log("Canvas dimensions set:", videoWidth, videoHeight);
          }
          
          // Make detections
          const hand = await handposeModel.estimateHands(video);
          
          // Draw hand landmarks
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            
            // If hand detected, process it
            if (hand.length > 0) {
              // Draw hand landmarks
              drawHand(hand, ctx);
              
              // Update video dimensions for scaling in gesture detection
              if (typeof (detectGesture as any).setVideoWidth === 'function') {
                (detectGesture as any).setVideoWidth(video.videoWidth);
              }
              
              // Detect gesture from landmarks with stability
              const gesture = detectGesture(hand[0].landmarks);
              
              if (gesture !== detectedGesture) {
                setDetectedGesture(gesture);
                
                // Show feedback based on gesture
                if (gesture === 'thumbs_up') {
                  setFeedback({
                    message: "Thumbs up mode activated!",
                    visible: true
                  });
                  toast.success("Detected: Thumbs Up!");
                } else if (gesture === 'peace') {
                  setFeedback({
                    message: "Peace mode activated",
                    visible: true
                  });
                  toast.success("Detected: Peace Sign!");
                } else if (gesture === 'closed_palm') {
                  setFeedback({
                    message: "Closed palm mode activated",
                    visible: true
                  });
                  toast.success("Detected: Open Palm!");
                } else if (gesture === 'fist') {
                  setFeedback({
                    message: "Fist mode activated",
                    visible: true
                  });
                  toast.success("Detected: Fist!");
                }
                
                // Vibrate device if supported
                if ('vibrate' in navigator) {
                  navigator.vibrate(200);
                }
                
                // Hide feedback after 2 seconds
                setTimeout(() => {
                  setFeedback(prev => ({ ...prev, visible: false }));
                }, 2000);
              }
            } else {
              // No hand detected
              if (detectedGesture !== 'No gesture detected') {
                setDetectedGesture('No gesture detected');
              }
            }
          }
        } catch (error) {
          console.error('Error during hand detection:', error);
          // Don't stop the loop on errors
        }
      }
      
      // Continue detection loop with next frame
      requestId = requestAnimationFrame(detect);
    };
    
    // Start detection if camera is active and model is loaded
    if (cameraActive && handposeModel) {
      console.log("Starting detection loop...");
      detect();
    }
    
    // Cleanup function
    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [cameraActive, detectedGesture, handposeModel]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">AI Gesture Control</h1>
        <div className="flex items-center gap-2">
          {tfReady && (
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          )}
          {!tfReady && (
            <span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          )}
          <Button 
            variant={cameraActive ? "destructive" : "default"} 
            onClick={cameraActive ? stopCamera : startCamera}
            disabled={isModelLoading || !tfReady}
            className="min-w-[150px]"
          >
            {isModelLoading ? 'Loading AI...' : (cameraActive ? 'Stop Camera' : 'Start Camera')}
          </Button>
        </div>
      </header>
      
      <main className="flex-1 p-4 flex flex-col items-center">
        <Card className="w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
          <div className="bg-black relative aspect-video">
            {!tfReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 z-20">
                <div className="text-center p-4 bg-black/70 rounded-lg">
                  <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-lg">Initializing TensorFlow.js...</p>
                  <p className="text-white/70 text-sm mt-2">This may take a moment</p>
                </div>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-900/20 z-20">
                <div className="text-center p-4 bg-black/70 rounded-lg max-w-md">
                  <p className="text-red-400 text-xl mb-2">⚠️ Error</p>
                  <p className="text-white text-md px-4 py-2 rounded">{error}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.reload()}
                    className="mt-4 text-white border-white/30 hover:bg-white/10"
                  >
                    Refresh Page
                  </Button>
                </div>
              </div>
            )}
            {!cameraActive && !isModelLoading && tfReady && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20">
                <div className="text-center">
                  <p className="text-white text-lg mb-4">Click 'Start Camera' to begin</p>
                  <Button 
                    onClick={startCamera}
                    className="animate-pulse"
                    size="lg"
                  >
                    Start Camera
                  </Button>
                </div>
              </div>
            )}
            {isModelLoading && tfReady && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 z-20">
                <div className="text-center p-4 bg-black/70 rounded-lg">
                  <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-lg">Loading AI model...</p>
                  <p className="text-white/70 text-sm mt-2">This may take a few seconds</p>
                </div>
              </div>
            )}
            <video 
              ref={videoRef} 
              className="absolute top-0 left-0 w-full h-full object-cover mirror" 
              autoPlay 
              playsInline
            />
            <canvas 
              ref={canvasRef} 
              className="absolute top-0 left-0 w-full h-full object-cover z-10 mirror"
            />
          </div>
          
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Detected: <span className={`font-normal gesture-display ${detectedGesture !== 'No gesture detected' ? 'text-green-600 font-bold' : ''}`}>{detectedGesture}</span>
              </h2>
              <div className="text-xs text-gray-500">
                {cameraActive ? 'Camera Active' : 'Camera Off'}
              </div>
            </div>
          </div>
        </Card>
        
        {feedback.visible && (
          <Alert className="mt-4 w-full max-w-2xl animate-in fade-in slide-in-from-bottom">
            <AlertTitle className="text-xl">Gesture Recognized!</AlertTitle>
            <AlertDescription className="text-lg">
              {feedback.message}
            </AlertDescription>
          </Alert>
        )}
        
        <div className="mt-8 w-full max-w-2xl">
          <h3 className="text-lg font-medium mb-2">Available Gestures:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-3 bg-white rounded-lg shadow text-center transition-all ${detectedGesture === 'thumbs_up' ? 'ring-2 ring-green-500 scale-105 gesture-highlight' : ''}`}>
              <p className="text-3xl">👍</p>
              <p className="mt-1">Thumbs Up</p>
            </div>
            <div className={`p-3 bg-white rounded-lg shadow text-center transition-all ${detectedGesture === 'peace' ? 'ring-2 ring-green-500 scale-105 gesture-highlight' : ''}`}>
              <p className="text-3xl">✌️</p>
              <p className="mt-1">Peace Sign</p>
            </div>
            <div className={`p-3 bg-white rounded-lg shadow text-center transition-all ${detectedGesture === 'open_palm' ? 'ring-2 ring-green-500 scale-105 gesture-highlight' : ''}`}>
              <p className="text-3xl">✋</p>
              <p className="mt-1">Open Palm</p>
            </div>
            <div className={`p-3 bg-white rounded-lg shadow text-center transition-all ${detectedGesture === 'fist' ? 'ring-2 ring-green-500 scale-105 gesture-highlight' : ''}`}>
              <p className="text-3xl">👊</p>
              <p className="mt-1">Fist</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 w-full max-w-2xl bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Debug Information:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>TensorFlow Status: {tfReady ? '✅ Ready' : '❌ Not Ready'}</p>
            <p>Model Status: {handposeModel ? '✅ Loaded' : '❌ Not Loaded'}</p>
            <p>Camera: {cameraActive ? '✅ Active' : '❌ Inactive'}</p>
            {error && <p className="text-red-500">Error: {error}</p>}
          </div>
        </div>
      </main>
      
      {/* Mirror style for camera */}
    </div>
  );
}