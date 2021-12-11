import {UnaryFunction} from 'fnxt/fnxt-types';

export const map = <T, R>(fn: UnaryFunction<T, R>) => (array: T[]): Array<R> => array.map(fn);
