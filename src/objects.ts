/**
 * Clone an object by converting to/from JSON.
 * @param value The value to clone.
 * @typeParam T The generic type of the values in the array.
 * @returns The cloned value.
 */
export function jsonClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
