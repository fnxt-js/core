import {Folder} from 'fnxt/fnxt-types';
import {buildScanner} from '../internal/scanner';

export const scanBack = <E, F>(fn: Folder<E, F>) => (array: E[]) => (initial: F): F[] =>
  array.reduceRight(buildScanner(fn), [initial]).reverse();
