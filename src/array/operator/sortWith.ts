import {Comparer} from 'fnxt/fnxt-types';
import {sortInPlaceWith} from './sortInPlaceWith';

export const sortWith = <T>(fn: Comparer<T>) => (array: T[]): T[] => sortInPlaceWith(fn)([...array]);

