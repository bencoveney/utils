export interface Vector2 {
  x: number;
  y: number;
}

export function distanceManhattan2(from: Vector2, to: Vector2): number {
  const dX = Math.abs(to.x - from.x);
  const dY = Math.abs(to.y - from.y);
  return dX + dY;
}

export function distanceEuclidean2(from: Vector2, to: Vector2): number {
  const x = Math.abs(to.x - from.x);
  const y = Math.abs(to.y - from.y);
  return Math.sqrt(x * x + y * y);
}
