export const splitInto = <T>(count: number) =>
  (array: T[]): T[][] => {
    const length = array.length;
    if (!length) {
      throw Error('array is empty');
    }
    const numberOfChunks = Math.min(array.length, count);
    const chunkSize = Math.floor(length / numberOfChunks);
    const excess = length % numberOfChunks;
    const result: T[][] = [];
    let start = 0;
    for (let i = 0; i < numberOfChunks; i++) {
      const end = start + chunkSize + +(i < excess);
      result.push(array.slice(start, end));
      start = end;
    }
    return result;
  };

