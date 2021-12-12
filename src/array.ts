/**
 * Return an array of the specified length, with undefined as every element.
 * @param {number} length The length of the array.
 * @return {undefined[]} The array
 */
export function empty(length: number): undefined[] {
  return new Array(length).fill(undefined);
}

/**
 * Return an array with each number in the specified range.
 * @param {number} from The number to start from (inclusive).
 * @param {number} to The number to end on (exclusive).
 * @return {number[]} The array.
 */
export function range(from: number, to: number): number[] {
  return empty(to - from).map((_, index) => from + index);
}

/**
 * Return an array with each number in the specified range, starting from zero.
 * @param {number} to The number to end on (exclusive).
 * @return {number[]} The array.
 */
export function rangeTo(to: number): number[] {
  return range(0, to);
}
