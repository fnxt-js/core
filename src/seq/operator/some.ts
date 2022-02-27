import {Predicate, Seq} from 'fnxt/fnxt-types';

export const some = <T>(predicate: Predicate<T>) =>
    (seq: Seq<T>): boolean => {
        for (const e of seq) if (predicate(e)) return true;
        return false;
    };
