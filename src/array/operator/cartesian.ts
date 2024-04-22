import {chunkBySize} from './chunkBySize';
import {allCombinations} from './allCombinations';

export function cartesian(): [];
export function cartesian<A>(a: A[]): [A][];
export function cartesian<A, B>(a: A[], b: B[]): [A, B][][];
export function cartesian<A, B, C>(a: A[], b: B[], c: C[]): [A, B, C][][][];
export function cartesian<A, B, C, D>(a: A[], b: B[], c: C[], d: D[]): [A, B, C, D][][][][];
export function cartesian<A, B, C, D, E>(a: A[], b: B[], c: C[], d: D[], e: E[]): [A, B, C, D, E][][][][][];
export function cartesian<A, B, C, D, E, F>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[]): [A, B, C, D, E, F][][][][][];
export function cartesian<A, B, C, D, E, F, G>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[]): [A, B, C, D, E, F, G][][][][][][];
export function cartesian<A, B, C, D, E, F, G, H>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[], h: H[]): [A, B, C, D, E, F, G, H][][][][][][][];
export function cartesian<A, B, C, D, E, F, G, H>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[], h: H[]): [A, B, C, D, E, F, G, H][][][][][][][];

export function cartesian(...arrays: unknown[][]): unknown[][] {

  // @ts-ignore
  let res: any[] = allCombinations(...arrays);

  for (let i = arrays.length - 1; i > 0; i--) {
    const size = arrays[i].length;
    res = chunkBySize(size)(res);
  }
  return res;

}

