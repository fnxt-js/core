import {flatten} from './flatten';
import {UnaryFunction} from 'fnxt/fnxt-types';

export const collect = <E, F>(fn: UnaryFunction<E, F[]>) => (array: E[]): F[] =>
  flatten(array.map(fn));
  

