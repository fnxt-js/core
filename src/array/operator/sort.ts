import {sortInPlace} from './sortInPlace';

export const sort = <T>(array: T[]): T[] => sortInPlace([...array]);

