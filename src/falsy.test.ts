import * as falsy from "./falsy";

test.each([
  { value: null, throws: true },
  { value: undefined, throws: false },
  { value: false, throws: false },
  { value: NaN, throws: false },
  { value: 0, throws: false },
  { value: -0, throws: false },
  { value: 0n, throws: false },
  { value: "", throws: false },
  { value: true, throws: false },
  { value: 1, throws: false },
  { value: -1, throws: false },
  { value: "not null", throws: false },
])("falsy.throwIfNull($possiblyNull) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => falsy.throwIfNull(value)).toThrow();
  } else {
    expect(falsy.throwIfNull(value)).toBe(value);
  }
});

test.each([
  { value: null, throws: false },
  { value: undefined, throws: true },
  { value: false, throws: false },
  { value: NaN, throws: false },
  { value: 0, throws: false },
  { value: -0, throws: false },
  { value: 0n, throws: false },
  { value: "", throws: false },
  { value: true, throws: false },
  { value: 1, throws: false },
  { value: -1, throws: false },
  { value: "not null", throws: false },
])("falsy.throwIfUndefined($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => falsy.throwIfUndefined(value)).toThrow();
  } else {
    expect(falsy.throwIfUndefined(value)).toBe(value);
  }
});

test.each([
  { value: null, throws: true },
  { value: undefined, throws: true },
  { value: false, throws: false },
  { value: NaN, throws: false },
  { value: 0, throws: false },
  { value: -0, throws: false },
  { value: 0n, throws: false },
  { value: "", throws: false },
  { value: true, throws: false },
  { value: 1, throws: false },
  { value: -1, throws: false },
  { value: "not null", throws: false },
])("falsy.throwIfNullish($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => falsy.throwIfNullish(value)).toThrow();
  } else {
    expect(falsy.throwIfNullish(value)).toBe(value);
  }
});

test.each([
  { value: null, throws: true },
  { value: undefined, throws: true },
  { value: false, throws: true },
  { value: NaN, throws: true },
  { value: 0, throws: true },
  { value: -0, throws: true },
  { value: 0n, throws: true },
  { value: "", throws: true },
  { value: true, throws: false },
  { value: 1, throws: false },
  { value: -1, throws: false },
  { value: "not null", throws: false },
])("falsy.throwIfFalsy($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => falsy.throwIfFalsy(value)).toThrow();
  } else {
    expect(falsy.throwIfFalsy(value)).toBe(value);
  }
});

const values = [
  null,
  undefined,
  false,
  NaN,
  0,
  -0,
  0n,
  "",
  true,
  1,
  -1,
  "not null",
];

test("falsy.notNull", () => {
  expect(values.filter((value) => falsy.notNull(value))).toEqual([
    undefined,
    false,
    NaN,
    0,
    -0,
    0n,
    "",
    true,
    1,
    -1,
    "not null",
  ]);
});

test("falsy.notUndefined", () => {
  expect(values.filter((value) => falsy.notUndefined(value))).toEqual([
    null,
    false,
    NaN,
    0,
    -0,
    0n,
    "",
    true,
    1,
    -1,
    "not null",
  ]);
});

test("falsy.notNullish", () => {
  expect(values.filter((value) => falsy.notNullish(value))).toEqual([
    false,
    NaN,
    0,
    -0,
    0n,
    "",
    true,
    1,
    -1,
    "not null",
  ]);
});

test("falsy.notFalsy", () => {
  expect(values.filter((value) => falsy.notFalsy(value))).toEqual([
    true,
    1,
    -1,
    "not null",
  ]);
});
