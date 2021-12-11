import {Folder} from 'fnxt/fnxt-types';

export const foldBack = <E, F>(fn: Folder<E, F>) => (initial: F) => (array: E[]): F => array.reduceRight(fn, initial);
