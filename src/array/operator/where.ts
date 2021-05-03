import {Predicate} from '../../types/types';


export const where = <T>(fn: Predicate<T>) => (array: T[]): T[] => array.filter(fn);
