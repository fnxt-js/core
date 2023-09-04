export const updateAt = (index: number) => <T>(value: T) => (array: T[]) => {
  if (index < 0 || index >= array.length) {
    throw Error(`index: (${index}) out of range`);
  }

  const copy = Array.from(array);
  copy[index] = value;
  return copy;
};
