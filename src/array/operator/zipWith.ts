import {BinaryFunction} from 'fnxt/fnxt-types';

export const zipWith = <E, F, R>(mapper: BinaryFunction<E, F, R>) => (arr1: E[]) => (arr2: F[]): Array<R> => {
  if (arr1.length !== arr2.length) {
    throw new Error('Input arrays must have equal lengths');
  }
  const result: Array<R> = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(mapper(arr1[i], arr2[i]));
  }
  return result;
};
