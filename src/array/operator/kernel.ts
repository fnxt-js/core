export const kernel = (stride: number) => {

  if (stride < 1) {
    throw Error(`stride must not be less than 1. (${stride} given)`);
  }
  return (windowSize: number) => {
    if (windowSize < 1) {
      throw Error(`windowSize must not be less than 1. (${windowSize} given)`);
    }

    return <T>(array: T[]): T[][] => {
      const result = [];
      for (let i = 0; i <= array.length - windowSize; i+=stride) {
        const window: T[] = [];
        result.push(window);
        for (let j = i; j < i + windowSize; j++) {
          window.push(array[j]);
        }
      }
      return result;
    };
  };
};

