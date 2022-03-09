export const transpose = <T>(array: T[][]): T[][] => {
  const newArray: T[][] = [];
  const length = array[0].length;
  if (!length) {
    throw new Error();
  }
  for (let i = 0; i < length; i++) {
    newArray.push([]);
  }

  for (const item of array) {
    if (item.length !== length) {
      throw new Error();
    }
    for (let j = 0; j < length; j++) {
      newArray[j].push(item[j]);
    }
  }

  return newArray;
};
