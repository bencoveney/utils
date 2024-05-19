import { Vector2 } from "./vector2";

// TODO: Overload with only max.
export function randomNumber(min: number, max: number): number {
  const random = Math.random();
  const scale = max - min;
  return random * scale + min;
}

export function randomInt(min: number, max: number): number {
  return Math.round(randomNumber(min, max));
}

export function randomColor(): string {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

export function randomVector2(maxX: number, maxY: number): Vector2 {
  return {
    x: randomInt(0, maxX),
    y: randomInt(0, maxY),
  };
}
