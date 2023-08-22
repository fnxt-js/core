import {Predicate} from 'fnxt/fnxt-types';

export const exists = <T>(predicate: Predicate<T>) => (array: T[]): boolean => array.some(predicate);

