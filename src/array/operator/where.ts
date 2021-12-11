import {Predicate} from 'fnxt/fnxt-types';


export const where = <T>(fn: Predicate<T>) => (array: T[]): T[] => array.filter(fn);
