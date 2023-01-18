import {Gen, Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


function* gen_fib(): Gen<number> {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    {
      [b, a] = [a + b, b];
    }
  }
}

export const fibonacci = (): Seq<number> =>
  toSequence(() => gen_fib());

