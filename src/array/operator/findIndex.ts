import {Predicate} from 'fnxt/fnxt-types';

export const findIndex = <T>(fn: Predicate<T>) => (array: T[]): number => {
  const number = array.findIndex(fn);
  if(number < 0){
    throw Error('Not found')
  }
  return number;
};
