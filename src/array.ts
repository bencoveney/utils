export function empty(length: number): undefined[] {
  return new Array(length).fill(undefined);
}

export function range(from: number, to: number): number[] {
  return empty(to - from).map((_, index) => from + index);
}

export function rangeTo(to: number): number[] {
  return range(0, to);
}
