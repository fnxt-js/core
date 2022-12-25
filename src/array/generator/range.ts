import {Logger} from '../../internal/logger';

function up(step: number, from: number, to: number) {
  if (step < 0) {
    throw Error('step must be greater than 0');
  }
  const list = [];
  for (let i = from; i < to; i += step) {
    list.push(i);
  }
  return list;
}

function down(step: number, from: number, to: number) {

  if (step < 0) {// TODO remove after 2023.q2
    Logger.warn('fnxt/array/generator/range with negative steps are deprecated! just use a positive step value');
    step = Math.abs(step);
  }

  const list = [];
  for (let i = from; i > to; i -= step) {
    list.push(i);
  }
  return list;
}

export const range = (from: number, to: number, step = 1): number[] => {
  if (step === 0) {
    throw Error('step must not be 0');
  }
  return from <= to ? up(step, from, to) : down(step, from, to);
};
