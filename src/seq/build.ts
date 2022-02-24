import {Gen, Seq, Thunk} from 'fnxt/fnxt-types';

export const genToSeq = <E>(gen: Thunk<Gen<E>>): Seq<E> => ({
  [Symbol.iterator]() {
    return gen();
  }
});
