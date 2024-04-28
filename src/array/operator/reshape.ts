import {chunkBySize} from './chunkBySize';

export function reshape(dimensions: [number,]): <A>(a: A[]) => [A][];
export function reshape(dimensions: [number, number,]): <A>(a: A[]) => [A][][];
export function reshape(dimensions: [number, number, number,]): <A>(a: A[]) => [A][][][];
export function reshape(dimensions: [number, number, number, number,]): <A>(a: A[]) => [A][][][][];
export function reshape(dimensions: [number, number, number, number, number,]): <A>(a: A[]) => [A][][][][][];
export function reshape(dimensions: [number, number, number, number, number, number,]): <A>(a: A[]) => [A][][][][][][];
export function reshape(dimensions: [number, number, number, number, number, number, number,]): <A>(a: A[]) => [A][][][][][][][];
export function reshape(dimensions: [number, number, number, number, number, number, number, number]): <A>(a: A[]) => [A][][][][][][][][];
export function reshape(dimensions: number[]): <A>(a: A[]) => any[];

export function reshape(dimensions: number[]) {
  const size = dimensions.length ? dimensions.reduce((a, b) => a * b, 1) : 0;
  return (arrays: unknown[]): unknown[] => {
    if (size !== arrays.length) {
      throw new Error(dimensions.join(' * ') + ' must equal array length');
    }
    if (size === 0) {
      return [];
    }
    // @ts-ignore
    let res: any[] = arrays;
    for (let i = dimensions.length - 1; i >= 0; i--) {
      res = chunkBySize(dimensions[i])(res);
    }
    return res[0];

  };
}

