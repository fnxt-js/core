import {Gen, Seq} from 'fnxt/fnxt-types';
import {generator} from '../build';


function* gen_infinite(start: number, increment: number): Gen<number> {
    while (true) {
        yield start;
        start += increment;
    }
}

export const infinite = (start: number, increment: number): Seq<number> =>
    generator(() => gen_infinite(start, increment));

