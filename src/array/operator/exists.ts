import {Predicate} from 'fnxt/fnxt-types';

export const exists = <T>(fn: Predicate<T>) => (array: T[]): boolean => array.some(fn);

