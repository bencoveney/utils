import * as nulls from "./empty";

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
])("nulls.throwIfNull($possiblyNull) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => nulls.throwIfNull(value)).toThrow();
  } else {
    expect(nulls.throwIfNull(value)).toBe(value);
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
])("nulls.throwIfUndefined($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => nulls.throwIfUndefined(value)).toThrow();
  } else {
    expect(nulls.throwIfUndefined(value)).toBe(value);
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
])("nulls.throwIfNullish($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => nulls.throwIfNullish(value)).toThrow();
  } else {
    expect(nulls.throwIfNullish(value)).toBe(value);
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
])("nulls.throwIfFalsy($value) throws: $throws", ({ value, throws }) => {
  if (throws) {
    expect(() => nulls.throwIfFalsy(value)).toThrow();
  } else {
    expect(nulls.throwIfFalsy(value)).toBe(value);
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

test("nulls.notNull", () => {
  expect(values.filter((value) => nulls.notNull(value))).toEqual([
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

test("nulls.notUndefined", () => {
  expect(values.filter((value) => nulls.notUndefined(value))).toEqual([
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

test("nulls.notNullish", () => {
  expect(values.filter((value) => nulls.notNullish(value))).toEqual([
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

test("nulls.notFalsy", () => {
  expect(values.filter((value) => nulls.notFalsy(value))).toEqual([
    true,
    1,
    -1,
    "not null",
  ]);
});
