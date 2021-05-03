import {Predicate} from '../../types/types';

export const findIndex = <T>(fn: Predicate<T>) => (array: T[]): number => array.findIndex(fn);
