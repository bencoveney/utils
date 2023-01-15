/**
 * Pi.
 */
export const PI = Math.PI;

/**
 * Tau (twice Pi).
 */
export const TAU = PI * 2;

/**
 * Convert radians to degrees.
 * @param {number} degrees The amount of degrees to convert to radians.
 * @return {number} The amount of radians.
 */
export function degToRad(degrees: number): number {
  return (degrees * PI) / 180;
}

/**
 * Convert degrees to radians.
 * @param {number} degrees The amount of radians to convert to degrees.
 * @return {number} The amount of degrees.
 */
export function radToDeg(radians: number): number {
  return (radians * 180) / PI;
}
/**
 * Like the remainder operator (%) except it supports negative values.
 * @param value
 * @param max
 */
export function wrap(value: number, max: number) {
  return ((value % max) + max) % value;
}
