import {Predicate} from 'fnxt/fnxt-types';

export const find = <T>(predicate: Predicate<T>) => (array: T[]): T | undefined => array.find(fn);
