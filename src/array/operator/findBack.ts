import {rev} from './rev';
import {find} from './find';
import {Predicate} from 'fnxt/fnxt-types';

export const findBack = <T>(fn: Predicate<T>) => (array: T[]): T | undefined => {
  return find(fn)(rev(array));
};
