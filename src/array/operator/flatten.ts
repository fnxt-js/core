export const flatten = <E>(a: E[][]): E[] => {
  if (a === null || a === undefined) {
    throw Error();
  }
  return Array.prototype.concat.apply([], a);
};

