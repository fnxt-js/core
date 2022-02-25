import {Predicate, Seq} from 'fnxt/fnxt-types';
import {generator} from '../build';

export const takeWhile = <E>(predicate: Predicate<E>) => (seq: Seq<E>): Seq<E> =>
    generator(function* () {
        for (const e of seq) {
            if (predicate(e)) yield e;
            else return;
        }
    });

