import {Reduction, Seq} from 'fnxt/fnxt-types';

export const reduce = <E>(fn: Reduction<E>) =>
  (seq: Seq<E>): E => {
    const iter = seq[Symbol.iterator]();
    let n = iter.next();
    if (n.done) {
      throw Error();
    }
    let state = n.value;
    n = iter.next();
    while (!n.done) {
      state = fn(state, n.value);
      n = iter.next();
    }
    return state;

  };


