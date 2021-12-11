export const pairwise = <E>(array: E[]): [E, E][] => {
  const result: [E, E][] = [];
  for (let i = 1; i < array.length; i++) {
    result.push([array[i - 1], array[i]]);
  }
  return result;

};
