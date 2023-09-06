import {Predicate, Tuple} from 'fnxt/fnxt-types';

export const partition = <T>(predicate: Predicate<T>) => (array: T[]): Tuple<T[], T[]> => {
  const a: T[] = [];
  const b: T[] = [];
  for (const element of array) {
    if (predicate(element)) {
      a.push(element);
    } else {
      b.push(element);
    }
  }
  return [a, b] as const;
};

