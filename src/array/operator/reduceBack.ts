import {Reduction} from 'fnxt/fnxt-types';

export const reduceBack = <T>(fn: Reduction<T>) => (array: T[]): T => array.reduceRight(fn);
