export interface Vector2 {
  x: number;
  y: number;
}

export function distanceManhattan2(from: Vector2, to: Vector2) {
  const dX = Math.abs(to.x - from.x);
  const dY = Math.abs(to.y - from.y);
  return dX + dY;
}

export function distanceEuclidean2(from: Vector2, to: Vector2) {
  const x = Math.abs(to.x - from.x);
  const y = Math.abs(to.y - from.y);
  return Math.sqrt(x * x + y * y);
}

export interface Vector3 extends Vector2 {
  z: number;
}

export function distanceManhattan3(from: Vector3, to: Vector3) {
  const dX = Math.abs(to.x - from.x);
  const dY = Math.abs(to.y - from.y);
  const dZ = Math.abs(to.z - from.z);
  return dX + dY + dZ;
}

export function distanceEuclidean3(from: Vector3, to: Vector3) {
  const x = Math.abs(to.x - from.x);
  const y = Math.abs(to.y - from.y);
  const z = Math.abs(to.z - from.z);
  return Math.sqrt(x * x + y * y + z * z);
}
