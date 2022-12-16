import {flatten} from './flatten';
import {UnaryFunction} from 'fnxt/fnxt-types';

function getArr<F>(e: Iterable<F>): F[] {
  return Array.isArray(e) ? e : [...e];
}

export const collect = <E, F>(fn: UnaryFunction<E, Iterable<F>>) => (array: E[]): F[] =>
  flatten(array.map(e => getArr(fn(e))));


