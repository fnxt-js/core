import {truncate} from './truncate';

export const take = <T>(count: number) => (array: T[]): T[] => {
  if (count > array.length) {
    throw new Error();
  }
  return truncate(count)(array);
};

