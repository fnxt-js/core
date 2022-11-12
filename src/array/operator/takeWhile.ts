import {Predicate} from 'fnxt/fnxt-types';

export const takeWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      return array.slice(0, i);
    }
  }
  return array;
};


