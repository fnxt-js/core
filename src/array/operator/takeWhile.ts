import {Predicate} from 'fnxt/fnxt-types';

export const takeWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  const result = [];
  for (const element of array) {
    if (!predicate(element)) {
      break;
    }
    result.push(element);
  }
  return result;
};


