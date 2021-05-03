import {UnaryFunction} from '../../types/types';
import {flatten} from './flatten';

export const collect = <E, F>(fn: UnaryFunction<E, F[]>) => (array: E[]): F[] =>
    flatten(array.map(fn));
  

