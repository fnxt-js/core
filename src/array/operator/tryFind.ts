import {Predicate} from 'fnxt/fnxt-types';
import {None, Option, Some} from '../../option';


export const tryFind = <T>(fn: Predicate<T>) => (array: T[]): Option<T> => {
  const element = array.find(fn);
  return (element === undefined) ? None : Some(element);
};
