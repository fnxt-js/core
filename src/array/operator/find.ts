import {Predicate} from 'fnxt/fnxt-types';

export const find = <T>(predicate: Predicate<T>) => (array: T[]): T => {
  if(array.length === 0){
    throw Error('Array empty');
  }
  const element = array.find(predicate);
  if (element === undefined) {
    throw Error('Not found');
  }
  return element;
};
