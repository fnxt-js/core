export const charRange = (from: string, to: string, step = 1): string[] => {
  const list = [];

  if (step === 0) {
    throw Error('step must not be 0');
  }

  if (from.length !== 1) {
    throw Error('from must be a character (length: 1)');
  }

  if (to.length !== 1) {
    throw Error('to must be a character (length: 1)');
  }
  if (step < 0) {
    throw Error('step must be greater than 0');
  }

  const fromChar = from.charCodeAt(0);
  const toChar = to.charCodeAt(0);

  if (fromChar < toChar) {
    for (let i = fromChar; i <= toChar; i += step) {
      list.push(String.fromCharCode(i));
    }
  } else if (fromChar > toChar) {
    for (let i = fromChar; i >= toChar; i -= step) {
      list.push(String.fromCharCode(i));
    }
  }
  return list;

};
