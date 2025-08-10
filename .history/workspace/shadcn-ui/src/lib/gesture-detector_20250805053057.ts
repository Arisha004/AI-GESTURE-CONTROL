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
