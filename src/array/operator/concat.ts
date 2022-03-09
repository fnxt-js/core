export const concat = <E>(arrays: E[][]): E[] => {
  // noinspection JSMismatchedCollectionQueryUpdate
  const result: E[] = [];
  return result.concat(...arrays);
};

