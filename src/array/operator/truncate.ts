export const truncate = (count: number) => <T>(array: T[]): T[] => array.slice(0, count);
