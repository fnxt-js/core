import { Seq} from 'fnxt/fnxt-types';

export type Reducer<P, C> = (p: P, c: C) => P

export const reduce = <E>(fn: Reducer<E, E>) =>
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
