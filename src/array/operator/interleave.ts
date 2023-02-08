export const interleave = <E>(arr1: E[]) => (arr2: E[]) => {
  if (arr1.length !== arr2.length) {
    throw new Error('Input arrays must have equal lengths');
  }
  const result: E[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;

};

