import {Predicate, Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';

export const takeWhile = <E>(predicate: Predicate<E>) => (seq: Seq<E>): Seq<E> =>
    toSequence(function* () {
        for (const e of seq) {
            if (predicate(e)) yield e;
            else return;
        }
    });

