/**
 * @deprecated use sortWith
 * @param array
 */
export const sortDescending = <T>(array: T[]): T[] => [...array].sort().reverse();
