/**
 * Nullish values. These are not generally treated in a specific way by
 * operators, but it is useful to be able to refer to null and undefined
 * as a single category of empty value.
 */
export type Nullish = null | undefined;

/**
 * All values JavaScript will implicitly treat as false.
 */
export type Falsy =
  | Nullish
  | false
  | typeof NaN
  | 0
  | -0
  | 0n
  | ""
  | (typeof document)["all"];

/**
 * Throws if the given value is null, otherwise returns it.
 * @param value The value which could possibly be null.
 * @param name The (optional) name of the value, to include in the thrown error message.
 * @typeParam T The generic type of the value being tested.
 * @returns The value, once it has been confirmed it is not null.
 */
export function throwIfNull<T>(value: T | null, name: string = "value"): T {
  if (value === null) {
    throw new Error(`${name} was null`);
  }
  return value;
}

/**
 * Throws if the given value is undefined, otherwise returns it.
 * @param value The value which could possibly be undefined.
 * @param name The (optional) name of the value, to include in the thrown error message.
 * @typeParam T The generic type of the value being tested.
 * @returns The value, once it has been confirmed it is not undefined.
 */
export function throwIfUndefined<T>(
  value: T | undefined,
  name: string = "value"
): T {
  if (value === undefined) {
    throw new Error(`${name} was undefined`);
  }
  return value;
}

/**
 * Throws if the given value is nullish, otherwise returns it.
 * @param value The value which could possibly be nullish.
 * @param name The (optional) name of the value, to include in the thrown error message.
 * @typeParam T The generic type of the value being tested.
 * @returns The value, once it has been confirmed it is not nullish.
 */
export function throwIfNullish<T>(
  value: T | Nullish,
  name: string = "value"
): T {
  if (value === null || value === undefined) {
    throw new Error(`${name} was nullish`);
  }
  return value;
}

/**
 * Throws if the given value is falsy, otherwise returns it.
 * @param value The value which could possibly be falsy.
 * @param name The (optional) name of the value, to include in the thrown error message.
 * @typeParam T The generic type of the value being tested.
 * @returns The value, once it has been confirmed it is not falsy.
 */
export function throwIfFalsy<T>(value: T | Falsy, name: string = "value"): T {
  if (!value) {
    throw new Error(`${name} was falsy`);
  }
  return value as T;
}

/**
 * Test if the given value is null.
 * @param value The value to test.
 * @typeParam T The generic type of the value being tested.
 * @returns True if the value is not null, otherwise false.
 */
export function notNull<T>(value: T | null): value is T {
  return value !== null;
}

/**
 * Test if the given value is undefined.
 * @param value The value to test.
 * @typeParam T The generic type of the value being tested.
 * @returns True if the value is not undefined, otherwise false.
 */
export function notUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

/**
 * Test if the given value is nullish.
 * @param value The value to test.
 * @typeParam T The generic type of the value being tested.
 * @returns True if the value is not nullish, otherwise false.
 */
export function notNullish<T>(value: T | Nullish): value is T {
  return value !== null && value !== undefined;
}

/**
 * Test if the given value is falsy.
 * @param value The value to test.
 * @typeParam T The generic type of the value being tested.
 * @returns True if the value is not falsy, otherwise false.
 */
export function notFalsy<T>(value: T | Falsy): value is T {
  return Boolean(value);
}
