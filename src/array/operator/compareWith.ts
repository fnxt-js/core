import {Comparer} from 'fnxt/fnxt-types';

export const compareWith = <T>(comparer: Comparer<T>) =>
  (a: T[]) =>
    (b: T[]) => {
      const length = a.length - b.length;
      if (length != 0) {
        return length;
      }
      for (let i = 0; i < a.length; i++) {
        const cmp = comparer(a[i], b[i]);
        if (cmp != 0) {
          return cmp;
        }
      }
      return 0;

    };
