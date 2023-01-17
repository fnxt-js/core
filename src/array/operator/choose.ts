import {Chooser, isSome} from 'fnxt/option';


export const choose = <E, F>(fn: Chooser<E, F>) =>
  (array: Array<E>): Array<F> => {
    const list = [];
    for (const item of array) {
      const option = fn(item);
      if (isSome(option)) {
        list.push(option.value);
      }
    }
    return list;
  };
