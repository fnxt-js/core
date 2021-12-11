import {sumBy} from './sumBy';
import {NumberProjection} from 'fnxt/fnxt-types';

export const averageBy = <E>(fn: NumberProjection<E>) => (array: E[]): number => sumBy(fn)(array) / array.length;
