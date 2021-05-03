import {Predicate} from '../../types/types';

export const find = <T>(fn: Predicate<T>) => (array: T[]): T | undefined => array.find(fn);
