export const range = (from: number, to: number, step = 1) => {
  const list = [];
  if (step <= 0) {
    throw Error(`step must (${step}) be grater than 0`);
  }

  if (from < to) {
    for (let i = from; i < to; i += step) {
      list.push(i);
    }
  }
  else {
    for (let i = from; i > to; i -= step) {
      list.push(i);
    }
  }
  return list;

};
