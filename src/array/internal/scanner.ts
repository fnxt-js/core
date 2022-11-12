import {Folder} from 'fnxt/fnxt-types';
import {push} from 'fnxt/array';

/**
 * @internal
 * @param fn
 */
export const buildScanner = <E, F>(fn: Folder<E, F>) =>
  (list: F[], current: E): F[] =>
    push(fn(list[list.length - 1], current))(list);
