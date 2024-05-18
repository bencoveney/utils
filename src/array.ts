/**
 * Return an array of the specified length, with undefined as every element.
 * @param length The length of the array.
 * @return The array
 */
export function empty(length: number): undefined[] {
  return new Array(length).fill(undefined);
}

/**
 * Return an array with each number in the specified range.
 * @param from The number to start from (inclusive).
 * @param to The number to end on (exclusive).
 * @return  The array.
 */
export function range(from: number, to: number): number[] {
  return empty(to - from).map((_, index) => from + index);
}

/**
 * Return an array with each number in the specified range, starting from zero.
 * @param to The number to end on (exclusive).
 * @return The array.
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
