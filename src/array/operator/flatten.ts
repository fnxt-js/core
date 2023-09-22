export const flatten = <E>(array: E[][]): E[] => {
  if (!Array.isArray(array) || !array.every(Array.isArray)) {
    throw Error();
  }
  return Array.prototype.concat.apply([], array);
};

