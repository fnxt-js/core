import {Folder} from 'fnxt/fnxt-types';
import {buildScanner} from '../internal/scanner';

export const scanBack = <E, F>(fn: Folder<E, F>) =>
  (initial: F) =>
    (array: E[]): F[] => {
      return array.reduceRight(buildScanner(fn), [initial]).reverse();
    };
