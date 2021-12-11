import {Folder} from 'fnxt/fnxt-types';

export const scanBack = <E, F>(fn: Folder<E, F>) => (array: E[]) => (initial: F): F[] =>
  array.reduceRight(
    (list: F[], current: E) => {
      list.push(fn(list[list.length - 1], current));
      return list;
    },
    [initial]
  ).reverse();
