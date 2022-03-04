import {Gen, Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


function* gen_infinite(start: number, increment: number): Gen<number> {
    while (true) {
        yield start;
        start += increment;
    }
}

export const infinite = (start: number, increment: number): Seq<number> =>
    toSequence(() => gen_infinite(start, increment));

