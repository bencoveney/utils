/**
 * A place to quickly dump things from other projects that may be useful to integrate.
 */

export type ColorRGB = [number, number, number];
export type ColorRGBA = [number, number, number, number];

import { empty, normalize } from "./array";

export type Array2d<T> = {
  xSize: number;
  ySize: number;
  values: T[];
};

export type FillFunc<T> = (x: number, y: number) => T;
export type Filler<T> = T | FillFunc<T>;
function isFillFunc<T>(filler: Filler<T>): filler is FillFunc<T> {
  return typeof filler === "function";
}

export function array2dCreate<T>(
  xSize: number,
  ySize: number,
  init?: Filler<T>
): Array2d<T> {
  const size = xSize * ySize;
  if (init !== undefined) {
    if (isFillFunc(init)) {
      return {
        xSize,
        ySize,
        values: empty(size).map((_, index) => {
          const x = index % xSize;
          const y = Math.floor(index / ySize);
          return init(x, y);
        }),
      };
    } else {
      return {
        xSize,
        ySize,
        values: (empty(size) as T[]).fill(init as T),
      };
    }
  }
  return {
    xSize,
    ySize,
    values: empty(xSize * ySize) as T[],
  };
}

export function array2dFrom<T>(
  xSize: number,
  ySize: number,
  values: T[]
): Array2d<T> {
  return {
    xSize,
    ySize,
    values,
  };
}

export function array2dGet<T>(arr: Array2d<T>, x: number, y: number): T {
  return arr.values[x + y * arr.xSize];
}

export function array2dGetIndex<T>(
  arr: Array2d<T>,
  x: number,
  y: number
): number {
  return x + y * arr.xSize;
}

export function array2dGetCoords<T>(
  arr: Array2d<T>,
  index: number
): [number, number] {
  return [index % arr.xSize, Math.floor(index / arr.ySize)];
}

export function array2dIsInBounds<T>(
  arr: Array2d<T>,
  x: number,
  y: number
): boolean {
  return x >= 0 && x < arr.xSize && y >= 0 && y < arr.ySize;
}

export function array2dMap<T, U>(
  arr: Array2d<T>,
  mapper: (value: T, x: number, y: number, index: number) => U
): Array2d<U> {
  return {
    xSize: arr.xSize,
    ySize: arr.ySize,
    values: arr.values.map((value, index) =>
      mapper(value, index % arr.xSize, Math.floor(index / arr.ySize), index)
    ),
  };
}

export function array2dReplace<T, U>(
  arr: Array2d<T>,
  newValues: U[]
): Array2d<U> {
  return {
    xSize: arr.xSize,
    ySize: arr.ySize,
    values: newValues,
  };
}

export function array2dFlipY<T>(arr: Array2d<T>, y: number): number {
  return arr.ySize - y - 1;
}

export function array2dMerge<T extends {}, U>(
  arr: { [Property in keyof T]: Array2d<T[Property]> },
  merger: (value: T, x: number, y: number, index: number) => U
): Array2d<U> {
  const keys = Object.keys(arr) as Array<keyof T>;
  const anyArr = arr[keys[0]];
  const length = anyArr.values.length;
  const values: U[] = [];
  const param: Partial<T> = {};
  for (let index = 0; index < length; index++) {
    for (let key = 0; key < keys.length; key++) {
      param[keys[key]] = arr[keys[key]].values[index];
    }
    values.push(
      merger(
        param as T,
        index % anyArr.xSize,
        Math.floor(index / anyArr.ySize),
        index
      )
    );
  }
  return array2dReplace(anyArr, values);
}

export function array2dSum(...arrs: Array2d<number>[]): Array2d<number> {
  const anyArr = arrs[0];
  const length = anyArr.values.length;
  const values: number[] = [];
  for (let index = 0; index < length; index++) {
    values.push(0);
    for (let arr = 0; arr < arrs.length; arr++) {
      values[index] += arrs[arr].values[index];
    }
  }
  return array2dReplace(anyArr, values);
}

export function array2dProduct(...arrs: Array2d<number>[]): Array2d<number> {
  const anyArr = arrs[0];
  const length = anyArr.values.length;
  const values: number[] = [];
  for (let index = 0; index < length; index++) {
    values.push(1);
    for (let arr = 0; arr < arrs.length; arr++) {
      values[index] *= arrs[arr].values[index];
    }
  }
  return array2dReplace(anyArr, values);
}

export function array2dScale(
  arr: Array2d<number>,
  by: number
): Array2d<number> {
  const multiplied = [];
  for (let index = 0; index < arr.values.length; index++) {
    multiplied.push(arr.values[index] * by);
  }
  return array2dReplace(arr, multiplied);
}

export function array2dNormalize(arr: Array2d<number>): Array2d<number> {
  return array2dReplace(arr, normalize(arr.values));
}

export function array2dSlice<T>(
  arr: Array2d<T>,
  fromX: number,
  fromY: number,
  xSize: number,
  ySize: number
): Array2d<T> {
  const result = array2dCreate<T>(xSize, ySize);
  for (let xOffset = 0; xOffset < xSize; xOffset++) {
    for (let yOffset = 0; yOffset < ySize; yOffset++) {
      const sourceValue = array2dGet(arr, fromX + xOffset, fromY + yOffset);
      const mappedIndex = array2dGetIndex(result, xOffset, yOffset);
      result.values[mappedIndex] = sourceValue;
    }
  }
  return result;
}

export type NeighboursMask = [number, number][];

/*
   #
  #@#
   #
*/
export const neighbours4: NeighboursMask = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/*
  #####
  #####
  ##@##
  #####
  #####
*/
export const neighbours24: NeighboursMask = [
  [-2, -2],
  [-2, -1],
  [-2, 0],
  [-2, 1],
  [-2, 2],
  [-1, -2],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [-1, 2],
  [0, -2],
  [0, -1],
  [0, 1],
  [0, 2],
  [1, -2],
  [1, -1],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, -2],
  [2, -1],
  [2, 0],
  [2, 1],
  [2, 2],
];

export function array2dGetNeighbourIndices<T>(
  arr: Array2d<T>,
  index: number,
  neighbourMask: NeighboursMask,
  excluding?: Set<number>
): number[] {
  const [positionX, positionY] = array2dGetCoords(arr, index);
  const result = [];
  for (let neighbour = 0; neighbour < neighbourMask.length; neighbour++) {
    const [xOffset, yOffset] = neighbourMask[neighbour];
    const x = positionX + xOffset;
    const y = positionY + yOffset;
    if (array2dIsInBounds(arr, x, y)) {
      const index = array2dGetIndex(arr, x, y);
      if (!excluding?.has(index)) {
        result.push(index);
      }
    }
  }
  return result;
}

export function array2dFlip<T>(arr: Array2d<T>) {
  const result = [];
  for (let x = arr.xSize - 1; x >= 0; x--) {
    for (let y = arr.ySize - 1; y >= 0; y--) {
      result.push(array2dGet(arr, x, y));
    }
  }
  return array2dReplace(arr, result);
}

export type ViewportState = {
  width: number;
  height: number;
  scale: [number, number];
};

let viewport: ViewportState;

export function getViewport(canvas: HTMLCanvasElement): ViewportState {
  if (!viewport) {
    updateViewport(canvas);
  }
  return viewport;
}

// https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
function updateViewport(canvas: HTMLCanvasElement): void {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  const aspectRatio = width / height;

  const devicePixelRatio = window.devicePixelRatio || 1;
  const scaledWidth = Math.round(width * devicePixelRatio);
  const scaledHeight = Math.round(height * devicePixelRatio);
  canvas.width = scaledWidth;
  canvas.height = scaledHeight;
  viewport = {
    width: scaledWidth,
    height: scaledHeight,
    scale: [1.0, aspectRatio],
  };
}

export function bindResize(canvas: HTMLCanvasElement) {
  function resizeCanvas() {
    updateViewport(canvas);
  }

  window.addEventListener("resize", resizeCanvas, {
    capture: false,
    passive: true,
  });
}

// https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html
// https://webglfundamentals.org/webgl/lessons/webgl-matrix-vs-math.html

// prettier-ignore
export type Matrix3 = [
  number, number, number,
  number, number, number,
  number, number, number
];

export function identity(): Matrix3 {
  // prettier-ignore
  return [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];
}

export function multiply(a: Matrix3, b: Matrix3): Matrix3 {
  return [
    b[0] * a[0] + b[1] * a[3] + b[2] * a[6],
    b[0] * a[1] + b[1] * a[4] + b[2] * a[7],
    b[0] * a[2] + b[1] * a[5] + b[2] * a[8],
    b[3] * a[0] + b[4] * a[3] + b[5] * a[6],
    b[3] * a[1] + b[4] * a[4] + b[5] * a[7],
    b[3] * a[2] + b[4] * a[5] + b[5] * a[8],
    b[6] * a[0] + b[7] * a[3] + b[8] * a[6],
    b[6] * a[1] + b[7] * a[4] + b[8] * a[7],
    b[6] * a[2] + b[7] * a[5] + b[8] * a[8],
  ];
}

// More work, but slightly clearer what's going on.
export function multiplySlow(a: Matrix3, b: Matrix3): Matrix3 {
  var a00 = a[0 * 3 + 0];
  var a01 = a[0 * 3 + 1];
  var a02 = a[0 * 3 + 2];
  var a10 = a[1 * 3 + 0];
  var a11 = a[1 * 3 + 1];
  var a12 = a[1 * 3 + 2];
  var a20 = a[2 * 3 + 0];
  var a21 = a[2 * 3 + 1];
  var a22 = a[2 * 3 + 2];
  var b00 = b[0 * 3 + 0];
  var b01 = b[0 * 3 + 1];
  var b02 = b[0 * 3 + 2];
  var b10 = b[1 * 3 + 0];
  var b11 = b[1 * 3 + 1];
  var b12 = b[1 * 3 + 2];
  var b20 = b[2 * 3 + 0];
  var b21 = b[2 * 3 + 1];
  var b22 = b[2 * 3 + 2];

  return [
    b00 * a00 + b01 * a10 + b02 * a20,
    b00 * a01 + b01 * a11 + b02 * a21,
    b00 * a02 + b01 * a12 + b02 * a22,
    b10 * a00 + b11 * a10 + b12 * a20,
    b10 * a01 + b11 * a11 + b12 * a21,
    b10 * a02 + b11 * a12 + b12 * a22,
    b20 * a00 + b21 * a10 + b22 * a20,
    b20 * a01 + b21 * a11 + b22 * a21,
    b20 * a02 + b21 * a12 + b22 * a22,
  ];
}

export function createTranslation(
  translationX: number,
  translationY: number
): Matrix3 {
  // prettier-ignore
  return [
    1, 0, 0,
    0, 1, 0,
    translationX, translationY, 1,
  ];
}

export function translate(
  m: Matrix3,
  translationX: number,
  translationY: number
): Matrix3 {
  return multiply(m, createTranslation(translationX, translationY));
}

export function createRotation(angleInRadians: number): Matrix3 {
  var cosineAngle = Math.cos(angleInRadians);
  var sineAngle = Math.sin(angleInRadians);
  // prettier-ignore
  return [
    cosineAngle, -sineAngle, 0,
    sineAngle, cosineAngle, 0,
    0, 0, 1
  ];
}

export function rotate(m: Matrix3, angleInRadians: number): Matrix3 {
  return multiply(m, createRotation(angleInRadians));
}

export function createScaling(scaling: number): Matrix3;
export function createScaling(scalingX: number, scalingY: number): Matrix3;
export function createScaling(scalingX: number, scalingY?: number): Matrix3 {
  if (typeof scalingY !== "number") {
    scalingY = scalingX;
  }
  // prettier-ignore
  return [
    scalingX, 0, 0,
    0, scalingY, 0,
    0, 0, 1
  ];
}

export function scale(m: Matrix3, scaling: number): Matrix3;
export function scale(m: Matrix3, scalingX: number, scalingY: number): Matrix3;
export function scale(
  m: Matrix3,
  scalingX: number,
  scalingY?: number
): Matrix3 {
  // When calling createScaling, everything will be fine in the underlying method
  // but the typescript compiler gets nervous, hence the cast.
  return multiply(m, createScaling(scalingX, scalingY as number));
}

/*
  Project screen space to GL clip space where:
  - Screen space is
    - top left: (0, 0)
    - bottom right: (width, height)
  - Clip space is
    - bottom left (-1, -1)
    - top right: (1, 1)
*/
export function projection(width: number, height: number) {
  // prettier-ignore
  return [
    2 / width, 0, 0,
    0, -2 / height, 0,
    -1, 1, 1
  ];
}

export function randomInt(minIncl: number = 0, maxExcl: number = 1) {
  return Math.floor(Math.random() * (maxExcl - minIncl) + minIncl);
}

export function randomChoice<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Probably a mistake");
  }
  return items[randomInt(0, items.length)];
}

export function randomChoiceSafe<T>(items: T[]): T | undefined {
  if (items.length === 0) {
    return undefined;
  }
  return items[randomInt(0, items.length)];
}

export function randomChoices<T>(items: T[], nChoices: number) {
  if (nChoices >= items.length) {
    throw new Error("Probably a mistake");
  }
  const result = [randomChoice(items)];
  if (nChoices > 0) {
    result.push(
      ...randomChoices(
        items.filter((next) => next !== result[0]),
        nChoices - 1
      )
    );
  }
  return result;
}

export function flipCoin(): boolean {
  return rollDice(0.5);
}

export function rollDice(chanceOfSuccess: number): boolean {
  return Math.random() < chanceOfSuccess;
}

export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  let counter = result.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = result[counter];
    result[counter] = result[index];
    result[index] = temp;
  }

  return result;
}

export function joinGrammar(values: string[]) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, values.length - 1).join(", ")} and ${
    values[values.length - 1]
  }`;
}

export function stringComparer(a: string, b: string): number {
  return a.localeCompare(b);
}

export function sortStrings(values: string[]): string[] {
  return values.toSorted(stringComparer);
}
