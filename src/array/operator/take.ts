import {truncate} from './truncate';

export const take = (count: number) => <T>(array: T[]): T[] => {
  if (count > array.length) {
    throw new Error();
  }
  return truncate(count)(array);
};

