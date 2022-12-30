import {Predicate} from 'fnxt/fnxt-types';
import {None, Option, Some} from 'fnxt/option';

export const tryFindIndexBack = <T>(fn: Predicate<T>) => (array: T[]): Option<number> => {
  for (let i = array.length-1; i >= 0; i--) {
    const element = array[i];
    if (fn(element)) {
      return Some(i);
    }
  }
  return None
};
