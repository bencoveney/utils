/**
 * Similar to same-value equality, but +0 and -0 are considered equal.
 * Similar to strict equality, but NaN and NaN are considered equal.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality
 * @param x
 * @param y
 * @returns
 */
export function sameValueZero(x: any, y: any): boolean {
  if (typeof x === "number" && typeof y === "number") {
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
