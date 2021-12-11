export const tail = <T>(array: T[]): T[] => {
  const [, ...aTail] = array;
  if (!array.length) {
    throw Error();
  }
  return aTail;
};
