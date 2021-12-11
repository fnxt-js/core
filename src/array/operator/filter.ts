import {Predicate} from 'fnxt/fnxt-types';


export const filter = <T>(fn: Predicate<T>) => (array: T[]): T[] => array.filter(fn);
