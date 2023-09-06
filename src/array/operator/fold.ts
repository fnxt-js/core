import {Folder} from 'fnxt/fnxt-types';

export const fold = <E, F>(folder: Folder<E, F>) => (initial: F) => (array: E[]): F => array.reduce(folder, initial);
