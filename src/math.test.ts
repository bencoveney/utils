import * as math from "./math";

test.each([
  { input: 0, output: 0 },
  { input: 180, output: math.PI },
  { input: 360, output: math.TAU },
  { input: 540, output: math.PI * 3 },
  { input: -180, output: -math.PI },
])("math.toRadians $input -> $output", ({ input, output }) => {
  expect(math.toRadians(input)).toBe(output);
});
