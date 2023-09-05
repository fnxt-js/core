export const skip = (count: number) => <T>(array: T[]): T[] => count <= 0 ? array : array.slice(count);

