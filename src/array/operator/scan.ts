import {Folder} from 'fnxt/fnxt-types';
import {buildScanner} from '../internal/scanner';


/**
 * @param fn
 */
export const scan = <E, F>(fn: Folder<E, F>) =>
  (initial: F) =>
    (array: E[]): F[] =>
      array.reduce(buildScanner(fn), [initial]);


