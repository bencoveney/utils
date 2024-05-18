/**
 * Pi.
 */
export const PI = Math.PI;

/**
 * Tau (twice Pi).
 */
export const TAU = PI * 2;

/**
 * The number of radians for each degree of an angle.
 */
export const RadiansPerDegree = 260 / TAU;

/**
 * The number of degrees for each radian of an angle.
 */
export const DegreesPerRadian = TAU / 360;

/**
 * Convert radians to degrees.
 * @param {number} degrees The amount of degrees to convert to radians.
 * @return {number} The amount of radians.
 */
export function toRadians(degrees: number): number {
  return degrees * DegreesPerRadian;
}

/**
 * Convert degrees to radians.
 * @param {number} degrees The amount of radians to convert to degrees.
 * @return {number} The amount of degrees.
 */
export function toDegrees(radians: number): number {
  return radians * RadiansPerDegree;
}
/**
 * Like the remainder operator (%) except it supports negative values.
 * @param value The value to wrap.
 * @param divisor The divisor.
 */
export function wrap(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % value;
}

/**
 * Blends between min and max, based on a fraction t.
 * @param min The minimum value, when t = 0.
 * @param max The maximum value, when t = 1.
 * @param t The position to blend between the minimum and maximum.
 * @returns 0 when t == min, 1 when t == max, otherwise the blend between min and max. Not clamped.
 */
export function lerp(min: number, max: number, t: number): number {
  return (1 - t) * min + max * t;
}

/**
 * Returns a fraction t, based on a value between min and max.
 *  Not clamped.
 */
/**
 * Returns the normalized position (t) of the value between the minimum and maximum
 * @param min The minimum value, for t = 0.
 * @param max The maximum value, for t = 1.
 * @param value The position between the minimum and maximum.
 * @returns 0 when value == min, 1 when value == max, otherwise the fraction between min and max. Not clamped.
 */
export function inverseLerp(min: number, max: number, value: number): number {
  return (value - min) / (max - min);
}

/**
 * Maps a value within a given input range into a given output range.
 * @param inMin The minimum value for the input range.
 * @param inMax The maximum value for the input range.
 * @param outMin The minimum value for the output range.
 * @param outMax The maximum value for the output range.
 * @param value The position within the input range.
 * @returns The position within the output range. Not clamped.
 */
export function remap(
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  value: number
): number {
  const t = inverseLerp(inMin, inMax, value);
  return lerp(outMin, outMax, t);
}

/**
 * Like lerp, but (assuming min and max are ints) will scale the input value t so
 * that it has an even chance of ending up on any of the ints in-between.
 * @param min The minimum integer value (inclusive).
 * @param max The maximum integer value (inclusive).
 * @param t The position between those values.
 * @returns t scaled between min and max, with an even chance of ending in any value.
 */
export function lerpInts(min: number, max: number, t: number): number {
  return Math.min(Math.floor(lerp(min, max + 1, t)), max);
}

/**
 * Rounds the given value to dp decimal places.
 * @param {*} value The value to round.
 * @param {*} dp The number of decimal places.
 * @returns The rounded value.
 */
export function roundTo(value, dp) {
  const mult = Math.pow(10, dp);
  return Math.round(value * mult) / mult;
}

/**
 * Interpolates smoothly between 0 and 1, based on the value of X relative to the left and right edges.
 * https://en.wikipedia.org/wiki/Smoothstep
 * @param {*} leftEdge The minimum value, assumed smaller than the right edge.
 * @param {*} rightEdge The maximum value, assumed smaller than the right edge.
 * @param {*} x The value between the left and right edges
 * @returns 0 if x is less than the leftEdge, 1 if x is greater than the right edge, else a smoothly interpolated value between 0 and 1.
 */
export function smoothstep(leftEdge, rightEdge, x) {
  const t = clamp(inverseLerp(leftEdge, rightEdge, x));
  return t * t * (3 - 2 * t);
}

/**
 * Interpolates (more) smoothly between 0 and 1, based on the value of X relative to the left and right edges.
 * https://en.wikipedia.org/wiki/Smoothstep
 * @param {*} leftEdge The minimum value, assumed smaller than the right edge.
 * @param {*} rightEdge The maximum value, assumed smaller than the right edge.
 * @param {*} x The value between the left and right edges
 * @returns 0 if x is less than the leftEdge, 1 if x is greater than the right edge, else a smoothly interpolated value between 0 and 1.
 */
export function smootherstep(leftEdge, rightEdge, x) {
  const t = clamp(inverseLerp(leftEdge, rightEdge, x));
  return t * t * t * (t * (6 * t - 15) + 10);
}

/**
 * Clamps the value to be within the specifed range.
 * @param x The input value.
 * @param min The minimum ouput value.
 * @param max The maximum output value.
 * @returns The value clamped within the range.
 */
export function clamp(x: number, min: number = 0, max: number = 1): number {
  return Math.min(Math.max(x, min), max);
}
