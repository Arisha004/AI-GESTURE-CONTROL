/**
 * Utility function to draw hand landmarks on a canvas
 */
export const drawHand = (predictions: any[], ctx: CanvasRenderingContext2D) => {
  // Check if we have predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let i = 0; i < landmarks.length; i++) {
        const x = landmarks[i][0];
        const y = landmarks[i][1];

        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
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
          
          // Draw path
          ctx.beginPath();
          ctx.moveTo(landmarks[firstIdx][0], landmarks[firstIdx][1]);
          ctx.lineTo(landmarks[secondIdx][0], landmarks[secondIdx][1]);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    });
  }
};