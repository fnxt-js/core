export const iter = <E>(fn: (e: E) => void) => (e: E[]): E[] => {
  e.forEach(fn);
  return e;
};
