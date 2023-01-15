/*
  Maybe rename
  - Truthy
  - Empty

  Probs will have equivalents for undefined, similar.
*/

export function throwIfNull<T>(value: T | null, name: string = "value"): T {
  if (value === null) {
    throw new Error(`${name} was null`);
  }
  return value;
}
