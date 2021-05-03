export const windowed = <T>(windowSize: number) => (array: T[]): T[][] => {
  const result = [];

  for (let i = 0; i <= array.length - windowSize; i++) {
    const window = [];
    result.push(window);
    for (let j = i; j < i + windowSize; j++) {
      window.push(array[j]);
    }
  }
  return result;

};

