export const tail = <T>(array: T[]): T[] => {
  if (!array.length) {
    throw Error();
  }
  return array.slice(1);
};

