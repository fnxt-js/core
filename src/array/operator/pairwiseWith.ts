import {Reduction} from 'fnxt/fnxt-types';

export const pairwiseWith = <E>(fn: Reduction<E>) => (array: E[]): E[] => {
  const result: E[] = [];
  for (let i = 1; i < array.length; i++) {
    result.push(fn(array[i - 1], array[i]));
  }
  return result;
};
