import {Predicate, Tuple} from '../../types/types';

export const partition = <T>(predicate: Predicate<T>) => (array: T[]): Tuple<T[], T[]> => {
  const a = [];
  const b = [];
  for (const element of array) {
    if (predicate(element)) {
      a.push(element);
    } else {
      b.push(element);
    }
  }
  return [a, b];
};

