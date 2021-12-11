export const truncate = (count: number) => <T>(array: T[]): T[] => {
  const result = [];
  if (count >= array.length) {
    return array;
  }

  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
};
