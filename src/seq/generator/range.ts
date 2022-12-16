import {Gen, Seq, Thunk} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


const rangeUp = (from: number, to: number, step: number): Thunk<Gen<number>> => {
  if (step < 0) {
    throw Error('step must be greater than 0');
  }
  return function* () {
    for (let it = from; it < to; it += step) {
      yield it;
    }
  };
};

const rangeDown = (from: number, to: number, step: number): Thunk<Gen<number>> => {
  if (step < 0) {
    // TODO remove after 2023.q2
    ;(console as any).warn('fnxt/seq/generator/range with negative steps are deprecated! just use a positive step value');
    step = -step;
  }
  return function* () {
    for (let it = from; it > to; it -= step) {
      yield it;
    }
  };
};

export const range = (from: number, to: number, step = 1): Seq<number> => {
  if (step === 0) {
    throw Error('step must not be 0');
  }
  return toSequence(from <= to
    ? rangeUp(from, to, step)
    : rangeDown(from, to, step)
  );


};

