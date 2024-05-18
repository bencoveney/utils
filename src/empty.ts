type Nullish = null | undefined;
type Falsy = Nullish | false | typeof NaN | 0 | -0 | 0n | "";

export function throwIfNull<T>(value: T | null, name: string = "value"): T {
  if (value === null) {
    throw new Error(`${name} was null`);
  }
  return value;
}

export function throwIfUndefined<T>(
  value: T | undefined,
  name: string = "value"
): T {
  if (value === undefined) {
    throw new Error(`${name} was undefined`);
  }
  return value;
}

export function throwIfNullish<T>(
  value: T | Nullish,
  name: string = "value"
): T {
  if (value === null || value === undefined) {
    throw new Error(`${name} was nullish`);
  }
  return value;
}

export function throwIfFalsy<T>(value: T | Falsy, name: string = "value"): T {
  if (!value) {
    throw new Error(`${name} was falsy`);
  }
  return value as T;
}

export function notNull<T>(value: T | null): value is T {
  return value !== null;
}

export function notUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export function notNullish<T>(value: T | Nullish): value is T {
  return value !== null && value !== undefined;
}

export function notFalsy<T>(value: T | Falsy): value is T {
  return Boolean(value);
}
