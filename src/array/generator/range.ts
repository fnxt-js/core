export const range = (from: number, to: number, step = 1): number[] => {
  const list = [];

  if (step === 0) {
    throw Error('step must not be 0');
  }


  if (from < to) {
    if (step < 0) {
      throw Error('step must be greater than 0');
    }
    for (let i = from; i < to; i += step) {
      list.push(i);
    }
  }
  if (from > to) {
    if (step > 0) {
      throw Error('step must be less than 0');
    }
    for (let i = from; i > to; i += step) {
      list.push(i);
    }
  }
  return list;

};
