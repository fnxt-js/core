import {Folder} from '../../types/types';

export const fold = <E, F>(fn: Folder<E, F>) => (initial: F) => (array: E[]): F => array.reduce(fn, initial);
