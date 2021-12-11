import {Predicate} from 'fnxt/fnxt-types';

export const forall = <T>(fn: Predicate<T>) => (array: T[]): boolean => array.every(fn);
