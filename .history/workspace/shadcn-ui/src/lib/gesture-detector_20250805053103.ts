// Types for hand landmarks
type Point3D = [number, number, number];
type Landmarks = Point3D[];

// Variables for gesture stabilization
let lastGesture = 'No gesture detected';
let gestureCounter = 0;
const STABILITY_THRESHOLD = 5; // Number of frames to maintain gesture (higher = more stable but slower)

/**
 * Calculates the distance between two 3D points
 */
const calculateDistance = (point1: Point3D, point2: Point3D): number => {
  const [x1, y1, z1] = point1;
  const [x2, y2, z2] = point2;
  
  return Math.sqrt(
    Math.pow(x1 - x2, 2) + 
    Math.pow(y1 - y2, 2) + 
    Math.pow(z1 - z2, 2)
  );
};

/**
 * Calculates the angle between three 3D points
 */
const calculateAngle = (point1: Point3D, point2: Point3D, point3: Point3D): number => {
  // Vectors
  const vector1 = [
    point1[0] - point2[0],
    point1[1] - point2[1],
    point1[2] - point2[2]
  ];
  
  const vector2 = [
    point3[0] - point2[0],
    point3[1] - point2[1],
    point3[2] - point2[2]
  ];
  
  // Dot product
  const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
  
  // Magnitudes
  const magnitude1 = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1] + vector1[2] * vector1[2]);
  const magnitude2 = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1] + vector2[2] * vector2[2]);
  
  // Angle in radians
  const angleRadians = Math.acos(dotProduct / (magnitude1 * magnitude2));
  
  // Convert to degrees
  return angleRadians * (180 / Math.PI);
};

/**
 * Detects hand gestures from landmarks with stabilization
 * Returns one of: 'thumbs_up', 'peace', 'open_palm', 'fist', 'no_gesture'
 */
export const detectGesture = (landmarks: Landmarks): string => {
  if (!landmarks || landmarks.length !== 21) {
    gestureCounter = 0;
    lastGesture = 'No gesture detected';
    return 'No gesture detected';
  }

  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];
  const middleTip = landmarks[12];
  const ringTip = landmarks[16];
  const pinkyTip = landmarks[20];

  const indexKnuckle = landmarks[5];
  const middleKnuckle = landmarks[9];
  const ringKnuckle = landmarks[13];
  const pinkyKnuckle = landmarks[17];

  const wrist = landmarks[0];

  const thumbWristDist = calculateDistance(thumbTip, wrist);
  const indexWristDist = calculateDistance(indexTip, wrist);
  const middleWristDist = calculateDistance(middleTip, wrist);
  const ringWristDist = calculateDistance(ringTip, wrist);
  const pinkyWristDist = calculateDistance(pinkyTip, wrist);

  const indexKnuckleDist = calculateDistance(indexTip, indexKnuckle);
  const middleKnuckleDist = calculateDistance(middleTip, middleKnuckle);
  const ringKnuckleDist = calculateDistance(ringTip, ringKnuckle);
  const pinkyKnuckleDist = calculateDistance(pinkyTip, pinkyKnuckle);

  const thumbAngle = calculateAngle(wrist, landmarks[2], thumbTip);
  const indexAngle = calculateAngle(wrist, indexKnuckle, indexTip);
  const middleAngle = calculateAngle(wrist, middleKnuckle, middleTip);
  const ringAngle = calculateAngle(wrist, ringKnuckle, ringTip);
  const pinkyAngle = calculateAngle(wrist, pinkyKnuckle, pinkyTip);

  let detectedGesture = 'No gesture detected';

  console.log('DEBUG distances & angles:', {
    thumbWristDist,
    indexWristDist,
    middleWristDist,
    ringWristDist,
    pinkyWristDist,
    thumbAngle,
    indexAngle,
    middleAngle,
    ringAngle,
    pinkyAngle,
  });

  // ✅ Open Palm (check first)
  if (
    indexWristDist > 0.65 * calculateDistance(indexKnuckle, wrist) &&
    middleWristDist > 0.65 * calculateDistance(middleKnuckle, wrist) &&
    ringWristDist > 0.65 * calculateDistance(ringKnuckle, wrist) &&
    pinkyWristDist > 0.65 * calculateDistance(pinkyKnuckle, wrist) &&
    thumbWristDist > 0.5 * calculateDistance(landmarks[1], wrist) &&
    indexAngle < 40 &&
    middleAngle < 40 &&
    ringAngle < 40 &&
    pinkyAngle < 40 &&
    calculateDistance(indexTip, middleTip) > 0.2 * middleWristDist &&
    calculateDistance(middleTip, ringTip) > 0.2 * ringWristDist &&
    calculateDistance(ringTip, pinkyTip) > 0.2 * pinkyWristDist
  ) {
    detectedGesture = 'open_palm';
  }

  // ✅ Thumbs Up
  else if (
    thumbWristDist > 1.2 * Math.max(indexWristDist, middleWristDist) &&
    indexKnuckleDist < 0.4 * indexWristDist &&
    middleKnuckleDist < 0.4 * middleWristDist &&
    ringKnuckleDist < 0.4 * ringWristDist &&
    pinkyKnuckleDist < 0.4 * pinkyWristDist &&
    thumbTip[1] < wrist[1] &&
    thumbAngle < 45
  ) {
    detectedGesture = 'thumbs_up';
  }

  // ✅ Fist
  else if (
    indexKnuckleDist < 0.4 * indexWristDist &&
    middleKnuckleDist < 0.4 * middleWristDist &&
    ringKnuckleDist < 0.4 * ringWristDist &&
    pinkyKnuckleDist < 0.4 * pinkyWristDist &&
    calculateDistance(thumbTip, indexKnuckle) < 0.4 * indexWristDist &&
    indexAngle > 70 &&
    middleAngle > 70 &&
    ringAngle > 70 &&
    pinkyAngle > 70 &&
    calculateDistance(indexTip, middleTip) < 0.15 * middleWristDist
  ) {
    detectedGesture = 'fist';
  }

  // ✅ Peace Sign (last to avoid false detection)
  else if (
    indexWristDist > 0.6 * calculateDistance(indexKnuckle, wrist) &&
    middleWristDist > 0.6 * calculateDistance(middleKnuckle, wrist) &&
    ringKnuckleDist < 0.6 * ringWristDist &&
    pinkyKnuckleDist < 0.6 * pinkyWristDist &&
    calculateDistance(thumbTip, wrist) < 0.7 * Math.max(indexWristDist, middleWristDist) &&
    Math.abs(indexTip[1] - middleTip[1]) < 0.2 * middleWristDist
  ) {
    detectedGesture = 'peace';
  }

  // 🔁 Stability filter
  if (
    detectedGesture === lastGesture ||
    (detectedGesture !== 'No gesture detected' && lastGesture === 'No gesture detected')
  ) {
    gestureCounter++;
    if (gestureCounter >= STABILITY_THRESHOLD) {
      lastGesture = detectedGesture;
    }
  } else {
    gestureCounter = 0;
  }

  return lastGesture;
};
