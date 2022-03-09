import {Predicate, Seq} from 'fnxt/fnxt-types';

export const every = <T>(predicate: Predicate<T>) =>
  (seq: Seq<T>): boolean => {
    for (const e of seq) {
      if (!predicate(e)) {
        return false;
      }
    }
    return true;
  };
