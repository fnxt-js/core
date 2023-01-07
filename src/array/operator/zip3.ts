import {Tripple} from 'fnxt/fnxt-types';

export const zip3 = <T>(a: T[]) => <U>(b: U[]) => <S>(c: S[]): Tripple<T, U, S>[] => {
  if (a.length !== b.length || c.length !== a.length) {
    throw Error('arrays differ in length');
  }

  const result: Array<Tripple<T, U, S>> = [];
  for (let i = 0; i < a.length; i++) {
    result.push([a[i], b[i], c[i]]);
  }
  return result;
};
