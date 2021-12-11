import {Comparer} from 'fnxt/fnxt-types';

export const sortInPlaceWith = <T>(fn: Comparer<T>) => (array: T[]): T[] => array.sort(fn);
