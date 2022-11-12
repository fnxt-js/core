import {sortInPlace} from './sortInPlace';

/**
 * @deprecated use sortWith
 * @param array
 */
export const sort = <T>(array: T[]): T[] => sortInPlace([...array]);

