export const range = (from: number, to: number, step = 1): number[] => {
  const list = [];

  if (step === 0) {
    throw Error('step must not be 0');
  }


  if (from <= to) {
    if (step < 0) {
      throw Error('step must be greater than 0');
    }
    for (let i = from; i < to; i += step) {
      list.push(i);
    }
  } else if (from > to) {
    // TODO remove after 2023.q2
    if (step < 0) {
      (console as any).warn('fnxt/array/generator/range with negative steps are deprecated! just use a positive step value');
      step = Math.abs(step);
    }


    for (let i = from; i > to; i -= step) {
      list.push(i);
    }
  }
  return list;

};
