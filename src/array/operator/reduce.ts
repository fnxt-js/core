import {Reduction} from 'fnxt/fnxt-types';

export const reduce = <T>(fn: Reduction<T>) => (array: T[]): T => array.reduce(fn);
