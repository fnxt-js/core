import {Predicate} from 'fnxt/fnxt-types';

export const findIndex = <T>(fn: Predicate<T>) => (array: T[]): number => {
  if (array.length === 0) {
    throw Error('Array empty');
  }
  const number = array.findIndex(fn);
  if(number < 0){
    throw Error('Not found')
  }
  return number;
};
