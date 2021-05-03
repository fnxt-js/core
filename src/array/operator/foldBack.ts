import {Folder} from '../../types/types';

export const foldBack = <E, F>(fn: Folder<E, F>) => (initial: F) => (array: E[]): F => array.reduceRight(fn, initial);
