import {Predicate} from 'fnxt/fnxt-types';
import {None, Option, Some} from 'fnxt/option';

export const tryFindIndex = <T>(fn: Predicate<T>) => (array: T[]): Option<number> => {
  const number = array.findIndex(fn);
  return number < 0 ? None : Some(number);
};
