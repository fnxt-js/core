export const skip = (count: number) => <T>(array: T[]): T[] => {
  const result = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

