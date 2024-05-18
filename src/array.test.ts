import * as array from "./array";

test.each([
  { length: 0, result: [] },
  { length: 1, result: [undefined] },
  {
    length: 3,
    result: [undefined, undefined, undefined],
  },
])("array.empty($length) => $result", ({ length, result }) => {
  const output = array.empty(length);
  expect(output).toEqual(result);
  expect(output.length).toEqual(result.length);
});

test.each([
  { from: 0, to: 0, result: [] },
  { from: 0, to: 1, result: [0] },
  { from: 0, to: 5, result: [0, 1, 2, 3, 4] },
  { from: 5, to: 10, result: [5, 6, 7, 8, 9] },
])("array.range($from, $to) => $result", ({ from, to, result }) =>
  expect(array.range(from, to)).toEqual(result)
);

test.each([
  { to: 0, result: [] },
  { to: 1, result: [0] },
  { to: 5, result: [0, 1, 2, 3, 4] },
])("array.rangeTo($to) => $result", ({ to, result }) =>
  expect(array.rangeTo(to)).toEqual(result)
);

test.each([
  { index: -2, length: 0, result: NaN },
  { index: 0, length: 0, result: NaN },
  { index: 2, length: 0, result: NaN },
  { index: -8, length: 3, result: 1 },
  { index: -7, length: 3, result: 2 },
  { index: -6, length: 3, result: 0 },
  { index: -5, length: 3, result: 1 },
  { index: -4, length: 3, result: 2 },
  { index: -3, length: 3, result: 0 },
  { index: -2, length: 3, result: 1 },
  { index: -1, length: 3, result: 2 },
  { index: 0, length: 3, result: 0 },
  { index: 1, length: 3, result: 1 },
  { index: 2, length: 3, result: 2 },
  { index: 3, length: 3, result: 0 },
  { index: 4, length: 3, result: 1 },
  { index: 5, length: 3, result: 2 },
  { index: 6, length: 3, result: 0 },
  { index: 7, length: 3, result: 1 },
  { index: 8, length: 3, result: 2 },
])("array.wrapIndex($index, $length) => $result", ({ index, length, result }) =>
  expect(array.wrapIndex(index, length)).toBe(result)
);
