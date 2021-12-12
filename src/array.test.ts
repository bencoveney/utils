import * as array from "./array";

test("empty", () => {
  expect(array.empty(0)).toEqual([]);
  expect(array.empty(1)).toEqual([undefined]);
  expect(array.empty(5)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

test("range", () => {
  expect(array.range(0, 0)).toEqual([]);
  expect(array.range(0, 1)).toEqual([0]);
  expect(array.range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  expect(array.range(5, 10)).toEqual([5, 6, 7, 8, 9]);
});

test("rangeTo", () => {
  expect(array.rangeTo(0)).toEqual([]);
  expect(array.rangeTo(1)).toEqual([0]);
  expect(array.rangeTo(5)).toEqual([0, 1, 2, 3, 4]);
});
