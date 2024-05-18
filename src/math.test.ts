import * as math from "./math";

test.each([
  { degrees: 0, result: 0 },
  { degrees: 180, result: math.PI },
  { degrees: 360, result: math.TAU },
  { degrees: 540, result: math.PI * 3 },
  { degrees: -180, result: -math.PI },
])("math.toRadians($degrees) => $result", ({ degrees, result }) =>
  expect(math.toRadians(degrees)).toBe(result)
);

test.each([
  { radians: 0, result: 0 },
  { radians: math.PI, result: 180 },
  { radians: math.TAU, result: 360 },
  { radians: math.PI * 3, result: 540 },
  { radians: -math.PI, result: -180 },
])("math.toDegrees($radians) => $result", ({ radians, result }) =>
  expect(math.toDegrees(radians)).toBe(result)
);
