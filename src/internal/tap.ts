import {Consumer} from 'fnxt/fnxt-types';

export const tap = <E>(fn: Consumer<E>) => (e: E) => {
  fn(e);
  return e;
};
