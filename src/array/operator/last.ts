import {isEmpty} from './isEmpty';

export const last = <E>(array: E[]): E => {
  if (isEmpty(array)) { throw new Error(); }
  return array[array.length - 1];
};
