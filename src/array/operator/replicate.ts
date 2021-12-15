export const replicate = (count: number) => <E>(e: E): E[] => new Array(count).fill(e);


