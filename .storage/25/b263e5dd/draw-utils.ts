/**
 * Utility function to draw hand landmarks on a canvas
 */
export const drawHand = (predictions: any[], ctx: CanvasRenderingContext2D) => {
  // Safety checks
  if (!predictions || !Array.isArray(predictions) || predictions.length === 0 || !ctx) {
    return;
  }

  try {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Ensure prediction has landmarks
      if (!prediction || !prediction.landmarks || !Array.isArray(prediction.landmarks)) {
        return;
      }

      const landmarks = prediction.landmarks;

      // Loop through fingers - draw points first
      for (let i = 0; i < landmarks.length; i++) {
        if (!landmarks[i] || landmarks[i].length < 2) continue;
        
        const x = landmarks[i][0];
        const y = landmarks[i][1];
        
        if (isNaN(x) || isNaN(y)) continue;

        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#4ade80';
        ctx.fill();
      }

      // Draw connections
      const fingers = [
        [0, 1, 2, 3, 4], // thumb
        [0, 5, 6, 7, 8], // index finger
        [0, 9, 10, 11, 12], // middle finger
        [0, 13, 14, 15, 16], // ring finger
        [0, 17, 18, 19, 20], // pinky
      ];

      // Loop through each finger and draw connections
      for (let i = 0; i < fingers.length; i++) {
        const finger = fingers[i];
        
        for (let j = 0; j < finger.length - 1; j++) {
          const firstIdx = finger[j];
          const secondIdx = finger[j + 1];
          
          // Check if landmarks exist
          if (!landmarks[firstIdx] || !landmarks[secondIdx] || 
              !landmarks[firstIdx][0] || !landmarks[firstIdx][1] ||
              !landmarks[secondIdx][0] || !landmarks[secondIdx][1]) {
            continue;
          }
          
          const x1 = landmarks[firstIdx][0];
          const y1 = landmarks[firstIdx][1];
          const x2 = landmarks[secondIdx][0];
          const y2 = landmarks[secondIdx][1];
          
          if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) continue;
          
          // Draw path
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    });
  } catch (error) {
    console.error("Error drawing hand landmarks:", error);
  }
};