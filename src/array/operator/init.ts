export const init = <T>(array: T[]): T[] => {
  if (!array.length) {
    throw new Error();
  }
  return array.slice(0, array.length - 1);
};

