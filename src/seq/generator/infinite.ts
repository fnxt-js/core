import {Gen, Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


function* gen_infinite(start: number, step: number): Gen<number> {
  while (true) {
    yield start;
    start += step;
  }
}

export const infinite = (start: number, step: number): Seq<number> =>
  toSequence(() => gen_infinite(start, step));

