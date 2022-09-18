export const chunkBySize = (chunkSize: number) =>  <T>(array: T[]): T[][] => {
  const result = [];
  let chunk = [];
  let count = 0;
  for (const t of array) {
    chunk.push(t);
    if (++count === chunkSize) {
      count = 0;
      result.push(chunk);
      chunk = [];
    }
  }
  if (count !== 0) {
    result.push(chunk);
  }
  return result;

};

