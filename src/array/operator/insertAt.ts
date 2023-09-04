export const insertAt = (index: number) => <T>(value: T) => (array: T[]) => {
  if (index < 0 || index > array.length) {
    throw Error(`index: (${index}) out of range`);
  }

  const copy = Array.from(array);
  if (index == array.length) {
    copy.push(value);
  } else {
    copy.splice(index, 0, value);
  }
  return copy;
};
