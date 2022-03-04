import {Gen, Seq, Thunk} from 'fnxt/fnxt-types';

export const toSequence = <E>(gen: Thunk<Gen<E>>): Seq<E> => ({
  [Symbol.iterator]() {
    return gen();
  }
});
