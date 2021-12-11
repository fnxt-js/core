export const skip = <T>(count: number) => (array: T[]): T[] => {
  const result = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

