export const concat = <E>(arrays: E[][]): E[] => {
  return ([] as E[]).concat(...arrays);
};

