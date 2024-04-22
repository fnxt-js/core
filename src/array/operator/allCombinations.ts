import {allPairs} from './allPairs';
import {map} from './map';
import {pipe} from 'fnxt/pipe';

export function allCombinations(): [];
export function allCombinations<A>(a: A[]): [A][];
export function allCombinations<A, B>(a: A[], b: B[]): [A, B][];
export function allCombinations<A, B, C>(a: A[], b: B[], c: C[]): [A, B, C][];
export function allCombinations<A, B, C, D>(a: A[], b: B[], c: C[], d: D[]): [A, B, C, D][];
export function allCombinations<A, B, C, D, E>(a: A[], b: B[], c: C[], d: D[], e: E[]): [A, B, C, D, E][];
export function allCombinations<A, B, C, D, E, F>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[]): [A, B, C, D, E, F][];
export function allCombinations<A, B, C, D, E, F, G>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[]): [A, B, C, D, E, F, G][];
export function allCombinations<A, B, C, D, E, F, G, H>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[], h: H[]): [A, B, C, D, E, F, G, H][];

export function allCombinations(...arrays: unknown[][]): unknown[][] {
  if (arrays.length === 0) return [];
  const fn = ([head, ...tail]: unknown[][]): unknown[][] =>
    tail.length
      ? pipe(fn, allPairs(head), map(([h, t]) => [h, ...t]))(tail)
      : head.map(e => [e]);
  return fn(arrays);

}

