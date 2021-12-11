import {Predicate} from 'fnxt/fnxt-types';

export const takeWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  const result = [];
  let count = 0;
  while (predicate(array[count])) {
    result.push(array[count]);
    count++;
  }
  return result;
};

