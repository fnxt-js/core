export const push = <E>(...values: E[]) => (array: E[]): E[] => {
  const result = [...array];
  result.push(...values);
  return result;
};
