export const Logger = {
  warn: (...args: any[]) => {
    (console as any).warn(...args);
  }
};
