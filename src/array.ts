import { inverseLerp } from "./math";

/**
 * Return an array of the specified length, with undefined as every element.
 * @param length The length of the array.
 * @returns The empty array.
 */
export function empty(length: number): undefined[] {
  return new Array(length).fill(undefined);
}

/**
 * Return an array with each number in the specified range.
 * @param from The number to start from (inclusive).
 * @param to The number to end on (exclusive).
 * @returns The populated array.
 */
export function range(from: number, to: number): number[] {
  return empty(to - from).map((_, index) => from + index);
}

/**
 * Return an array with each number in the specified range, starting from zero.
 * @param to The number to end on (exclusive).
 * @return The populated array.
 */
export function rangeTo(to: number): number[] {
  return range(0, to);
}

/**
 * Index into the array at the specified position, wrapping around if going off the end.
 * Like the remainder operator (%) except it supports negative values.
 * @param index The index into the array.
 * @param length The length of the array.
 * @returns The wrapped index.
 */
export function wrapIndex(index: number, length: number): number {
  const positiveIndex = index < 0 ? length - (-index % length) : index;
  return positiveIndex % length;
}

/**
 * Pair every value with every other value in the array.
 * @param values The array to pair.
 * @typeParam T The generic type of the values in the array.
 * @returns Every possible pair of values in the array.
 */
export function getPairings<T>(values: T[]): [T, T][] {
  let result: [T, T][] = [];
  for (let first = 0; first < values.length - 1; first++) {
    for (let second = first + 1; second < values.length; second++) {
      result.push([values[first], values[second]]);
    }
  }
  return result;
}

/**
 * Get the lowest value in an array of numbers.
 * @param values The array of numbers.
 * @returns Undefined if the input array is empty, otherwise the lowest value.
 */
export function getMin(values: number[]): number | undefined {
  if (values.length === 0) {
    return undefined;
  }
  let min = values[0];
  for (let i = 1; i < values.length; i++) {
    min = Math.min(min, values[i]);
  }
  return min;
}

/**
 * Get the highest value in an array of numbers.
 * @param values The array of numbers.
 * @returns Undefined if the input array is empty, otherwise the highest value.
 */
export function getMax(values: number[]): number | undefined {
  if (values.length === 0) {
    return undefined;
  }
  let max = values[0];
  for (let i = 1; i < values.length; i++) {
    max = Math.max(max, values[i]);
  }
  return max;
}

/**
 * Get the highest and lowest value in an array of numbers.
 * @param values The array of numbers.
 * @returns Undefined if the input array is empty, otherwise the highest and lowest values.
 */
export function getMinAndMax(
  values: number[]
): { min: number; max: number } | undefined {
  if (values.length === 0) {
    return undefined;
  }
  let max = values[0];
  let min = values[0];
  for (let i = 1; i < values.length; i++) {
    max = Math.max(max, values[i]);
    min = Math.min(min, values[i]);
  }
  return { min, max };
}

/**
 * Create a new array where:
 * - The lowest value becomes 0.
 * - The highest value becomes 1.
 * - All other values are scaled between 0 and 1.
 * @param values The array of numbers.
 * @returns A new array with normalized values.
 */
export function normalize(values: number[]): number[] {
  if (values.length === 0) {
    return [];
  }
  if (values.length === 1) {
    return [1];
  }
  let highest = values[0];
  let lowest = values[0];
  for (let i = 1; i < values.length; i++) {
    highest = Math.max(highest, values[i]);
    lowest = Math.min(lowest, values[i]);
  }
  return values.map((value) => inverseLerp(value, lowest, highest));
}

/**
 * Gets the last item in an array.
 * @param values The array of values.
 * @typeParam T The generic type of the values in the array.
 * @returns Undefined if the array is empty, otherwise the last value.
 */
export function last<T>(values: T[]): T | undefined {
  if (values.length === 0) {
    return undefined;
  }
  return values[values.length - 1];
}

/**
 * Returns a new array with all the unique values from a source array.
 * Same-value-zero equality is used, where 0 = -0 and NaN = NaN.
 * @param values The array of values.
 * @typeParam T The generic type of the values in the array.
 * @returns A new array with the unique values.
 */
export function unique<T>(values: T[]): T[] {
  if (values.length <= 1) {
    return [...values];
  }
  const uniqueValues = [values[0]];
  for (let index = 1; index < values.length; index++) {
    const next = values[index];
    if (!uniqueValues.includes(next)) {
      uniqueValues.push(next);
    }
  }
  return uniqueValues;
}
