/**
 * A color represented as its component parts.
 */
export interface Color {
  /**
   * The red component (0 - 255)
   */
  r: number;
  /**
   * The green component (0 - 255)
   */
  g: number;
  /**
   * The blue component (0 - 255)
   */
  b: number;
}

/**
 * Flatten a color to a number, where each byte represents the RGB components.
 * @param color Color to convert
 * @return The hex triplet.
 */
export function toDec(color: Color): number {
  const { r, g, b } = color;
  return (r << 16) + (g << 8) + b;
}

/**
 * Extract the RGB components from the bytes of a number.
 * @param hexTriplet The hex triplet to convert
 * @return The output color.
 */
export function fromDec(hexTriplet: number): Color {
  return {
    r: hexTriplet >> 16,
    g: (hexTriplet >> 8) & 255,
    b: hexTriplet & 255,
  };
}

/**
 * Create a hexidecimal string (formatted as #ffffff) from the color.
 * Output will be lowercase.
 * @param color The color.
 * @return The hexidecimal string.
 */
export function toHex(color: Color): string {
  return "#" + ((1 << 24) + toDec(color)).toString(16).substring(1, 7);
}

/**
 * Parse a color from a hexidecimal string (formatted as #ffffff).
 * @param hexidecimal The hexidecimal string.
 * @return The color.
 */
export function fromHex(hexidecimal: string): Color {
  return fromDec(parseInt(hexidecimal.substring(1, 7), 16));
}

/**
 * Create an rgb string (formatted as rgb(255, 255, 255)) from the color.=
 * @param color The color to format.
 * @return The hexidecimal string.
 */
export function toRgb(color: Color): string {
  const { r, g, b } = color;
  return `rgb(${r}, ${g}, ${b})`;
}

// TODO: export function fromRgb() {}
