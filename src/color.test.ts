import * as color from "./color";

const testData: color.Color[] = [
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 255, b: 255 },
  { r: 100, g: 100, b: 100 },
  { r: 255, g: 100, b: 0 },
  { r: 0, g: 255, b: 100 },
];

test.each([
  { input: testData[0], result: 0 },
  { input: testData[1], result: 16777215 },
  { input: testData[2], result: 6579300 },
  { input: testData[3], result: 16737280 },
  { input: testData[4], result: 65380 },
])("color.toDec($input) => $result", ({ input, result }) =>
  expect(color.toDec(input)).toEqual(result)
);

test.each([
  { input: 0, result: testData[0] },
  { input: 16777215, result: testData[1] },
  { input: 6579300, result: testData[2] },
  { input: 16737280, result: testData[3] },
  { input: 65380, result: testData[4] },
])("color.fromDec($input) => $result", ({ input, result }) =>
  expect(color.fromDec(input)).toEqual(result)
);

test.each([
  { input: testData[0], result: "#000000" },
  { input: testData[1], result: "#ffffff" },
  { input: testData[2], result: "#646464" },
  { input: testData[3], result: "#ff6400" },
  { input: testData[4], result: "#00ff64" },
])("color.toHex($input) => $result", ({ input, result }) =>
  expect(color.toHex(input)).toEqual(result)
);

test.each([
  { input: "#000000", result: testData[0] },
  { input: "#ffffff", result: testData[1] },
  // Lowercase
  { input: "#646464", result: testData[2] },
  { input: "#ff6400", result: testData[3] },
  { input: "#00ff64", result: testData[4] },
  // Uppercase
  { input: "#FFFFFF", result: testData[1] },
  { input: "#FF6400", result: testData[3] },
  { input: "#00FF64", result: testData[4] },
])("color.fromHex($input) => $result", ({ input, result }) =>
  expect(color.fromHex(input)).toEqual(result)
);

test.each([
  { input: testData[0], result: "rgb(0, 0, 0)" },
  { input: testData[1], result: "rgb(255, 255, 255)" },
  { input: testData[2], result: "rgb(100, 100, 100)" },
  { input: testData[3], result: "rgb(255, 100, 0)" },
  { input: testData[4], result: "rgb(0, 255, 100)" },
])("color.toRgb($input) => $result", ({ input, result }) =>
  expect(color.toRgb(input)).toEqual(result)
);
