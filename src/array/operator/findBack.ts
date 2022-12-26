
import {Predicate} from 'fnxt/fnxt-types';

export const findBack = <T>(fn: Predicate<T>) => (array: T[]): T => {
  if (array.length === 0) {
    throw Error('Array empty');
  }
  for (let i = array.length-1; i >= 0; i--) {
    const element = array[i];
    if (fn(element)) {
      return element;
    }
  }

  throw Error('Not found');

};
