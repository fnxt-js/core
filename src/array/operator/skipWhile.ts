import {Predicate} from 'fnxt/fnxt-types';

export const skipWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  let count = 0;
  while (predicate(array[count])) {
    count++;
  }
  return array.slice(count);
};

