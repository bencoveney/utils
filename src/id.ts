let id = 0;

/**
 * Generate a unique identifier.
 * @param prefix The optional prefix for the identifier value.
 * @returns The unique identifier.
 */
export function getNextId(prefix: string = ""): string {
  return `${prefix}${id++}`;
}
