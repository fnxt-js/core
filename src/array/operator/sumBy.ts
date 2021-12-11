import {NumberProjection} from 'fnxt/fnxt-types';

export const sumBy = <E>(fn: NumberProjection<E>) => (array: E[]): number => array.reduce((a, b) => a + fn(b), 0);
