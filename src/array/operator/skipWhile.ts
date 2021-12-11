import {Predicate} from 'fnxt/fnxt-types';

export const skipWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  const result = [];
  let count = 0;
  while (predicate(array[count])) {
    count++;
  }
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

