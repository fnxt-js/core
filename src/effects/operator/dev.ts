import {Aff, Eff, of, run} from '../effect';
import {pipe} from 'fnxt/pipe';
import {map} from 'fnxt/array';
import {Failure, Result, ResultType, Success} from 'fnxt/result';

export type NamedAffs<T, Err> = {
  readonly [K in keyof T]: Eff<T[K], Err>;
}

type EnforcePropertiesToExtend<T, Err> = {
  [K in keyof T]: T[K] extends Eff<unknown, Err> ? T[K] : never;
};

// type X<T, Err> = {
//   [K in keyof T]: T[K] extends Eff<unknown, Err> ? T[K] : never;
// };
//
// type test<T extends string> = {
//   [K in T]: (x: K) => K;
// }

type ObjectValues<T> = T[keyof T];

type ObjectToParamsFunction<T> = (...args: ObjectValues<T>[]) => void;
// ObjectToParamsFunction<{ a: Eff<Date, number>, b: Eff<string, number> }>

type FunN<R> = (...args: unknown[]) => R;

export function mapMany<A, R>(fn: (a: A) => R): <Err>(a: Eff<A, Err>) => Result<R, Err[]>;
export function mapMany<A, B, R>(fn: (a: A, b: B) => R): <Err>(a: Eff<A, Err>, b: Eff<B, Err>) => Result<R, Err[]>;
export function mapMany<A, B, C, R>(fn: (a: A, b: B, c: C) => R): <Err>(a: Eff<A, Err>, b: Eff<B, Err>, c: Eff<C, Err>) => Result<R, Err[]>;
export function mapMany<R>(fn: FunN<R>): <Err>(...args: Eff<unknown, Err>[]) => Result<R, Err[]> {
  return <Err>(...args: Eff<unknown, Err>[]): Result<R, Err[]> => {
    const results: Result<unknown, Err>[] = pipe(
        map((e: Eff<unknown, Err>) => run(e)),
    )(args);

    const succeeded: unknown[] = [];
    const failed: Err[] = [];
    for (const result of results) {
      if (result.type === ResultType.Failure) {
        failed.push(result.value);
      } else {
        succeeded.push(result.value);
      }
    }
    if (failed.length > 0) {
      return Failure<R, Err[]>(failed);
    }
    return Success<R, Err[]>(fn(...succeeded));
  };
}


type AffNTuple<Err> = [...Aff<unknown, Err>[]];
export const x = (args: AffNTuple<number>) => {
  args.map(a => run(a));
};

type NamedMatcher<T, R> = { [K in keyof T]: (x: T[K]) => R };

type Union<T> = { [K in keyof T]: T[K] };

type UnionMatcher<T, R> = { [K in keyof T]: (x: T[K]) => R }[keyof T];

const union: Union<{a:string}> = {a: ''};

const match = <T, R>(m: NamedMatcher<T, R>): (x: Union<T>) => R => {
    return (x: Union<T>): R => {
        return m[x.tag](x);
    };
};

const matcher: NamedMatcher<{ a: string } | { b: number }, number> = {
  a: (_: string) => 0,
  b: (_: number) => 0
};

// export function map(...args: unknown[]): Aff<unknown, unknown> {
//     throw new Error('Not implemented');
// }
//
