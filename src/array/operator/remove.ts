export const remove = (index: number) => <T>(array: T[]) => {
  if (index < 0 || index >= array.length) {
    throw Error(`index: (${index}) out of range`);
  }

  const copy = Array.from(array);
  copy.splice(index, 1);
  return copy;
};
