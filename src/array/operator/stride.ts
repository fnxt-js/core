export const stride = (step: number) => <E>(array: E[]): E[] => {
  const result = [];
  for (let i = 0; i < array.length; i += step) {
    result.push(array[i]);
  }
  return result;
};
