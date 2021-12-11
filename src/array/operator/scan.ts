import {Folder} from 'fnxt/fnxt-types';

export const scan = <E, F>(fn: Folder<E, F>) => (initial: F) => (array: E[]): F[] =>
  array.reduce(
    (list: F[], current: E) => {
      list.push(fn(list[list.length - 1], current));
      return list;
    },
    [initial]
  );


