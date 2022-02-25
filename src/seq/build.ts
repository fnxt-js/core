import {Gen, Seq, Thunk} from 'fnxt/fnxt-types';

export const generator = <E>(gen: Thunk<Gen<E>>): Seq<E> => ({
  [Symbol.iterator]() {
    return gen();
  }
});
