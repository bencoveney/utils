import * as color from "./color";

const testData: color.Color[] = [
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 255, b: 255 },
  { r: 100, g: 100, b: 100 },
  { r: 255, g: 100, b: 0 },
  { r: 0, g: 255, b: 100 },
];

test("color.toDec", () => {
  expect(color.toDec(testData[0])).toEqual(0);
  expect(color.toDec(testData[1])).toEqual(16777215);
  expect(color.toDec(testData[2])).toEqual(6579300);
  expect(color.toDec(testData[3])).toEqual(16737280);
  expect(color.toDec(testData[4])).toEqual(65380);
});

test("color.fromDec", () => {
  expect(color.fromDec(0)).toEqual(testData[0]);
  expect(color.fromDec(16777215)).toEqual(testData[1]);
  expect(color.fromDec(6579300)).toEqual(testData[2]);
  expect(color.fromDec(16737280)).toEqual(testData[3]);
  expect(color.fromDec(65380)).toEqual(testData[4]);
});

test("color.toHex", () => {
  expect(color.toHex(testData[0])).toBe("#000000");
  expect(color.toHex(testData[1])).toBe("#ffffff");
  expect(color.toHex(testData[2])).toBe("#646464");
  expect(color.toHex(testData[3])).toBe("#ff6400");
  expect(color.toHex(testData[4])).toBe("#00ff64");
});

test("color.fromHex", () => {
  expect(color.fromHex("#000000")).toEqual(testData[0]);
  expect(color.fromHex("#646464")).toEqual(testData[2]);

  // Lowercase
  expect(color.fromHex("#ffffff")).toEqual(testData[1]);
  expect(color.fromHex("#ff6400")).toEqual(testData[3]);
  expect(color.fromHex("#00ff64")).toEqual(testData[4]);

  // Uppercase
  expect(color.fromHex("#FFFFFF")).toEqual(testData[1]);
  expect(color.fromHex("#FF6400")).toEqual(testData[3]);
  expect(color.fromHex("#00FF64")).toEqual(testData[4]);
});

test("color.toRgb", () => {
  expect(color.toRgb(testData[0])).toBe("rgb(0, 0, 0)");
  expect(color.toRgb(testData[1])).toBe("rgb(255, 255, 255)");
  expect(color.toRgb(testData[2])).toBe("rgb(100, 100, 100)");
  expect(color.toRgb(testData[3])).toBe("rgb(255, 100, 0)");
  expect(color.toRgb(testData[4])).toBe("rgb(0, 255, 100)");
});
