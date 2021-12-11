export const head = <T>(array: T[]): T => {
  const [aHead] = array;
  if (!array.length) {
    throw Error();
  }
  return aHead;
};
