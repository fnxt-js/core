import {KeyProjection} from '../../types/types';
import {pipe} from '../../pipe/pipe';
import {rev} from './rev';
import {sortBy} from './sortBy';

export const sortByDescending = <T>(fn: KeyProjection<T>) => (array: T[]): T[] => pipe(sortBy(fn), rev)(array);
