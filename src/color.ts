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
 * @param {Color} color Color to convert
 * @return {number} The hex triplet.
 */
export function toDec({ r, g, b }: Color): number {
  return (r << 16) + (g << 8) + b;
}

/**
 * Extract the RGB components from the bytes of a number.
 * @param {Color} color Color to convert
 * @return {number} The hex triplet.
 */
export function fromDec(hexTriplet: number): Color {
  return {
    r: hexTriplet >> 16,
    g: (hexTriplet >> 8) & 255,
    b: hexTriplet & 255,
  };
}

export function toHex(color: Color): string {
  return "#" + ((1 << 24) + toDec(color)).toString(16).substring(1, 7);
}

export function fromHex(hexidecimal: string): Color {
  return fromDec(parseInt(hexidecimal.substring(1, 7), 16));
}

export function toRgb({ r, g, b }: Color): string {
  return `rgb(${r}, ${g}, ${b})`;
}

// TODO: export function fromRgb() {}
