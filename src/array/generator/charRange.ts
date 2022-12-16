function up(fromChar: number, toChar: number, step: number) {
  const list = [];
  for (let i = fromChar; i <= toChar; i += step) {
    list.push(String.fromCharCode(i));
  }
  return list;
}

function down(fromChar: number, toChar: number, step: number) {
  const list = [];
  for (let i = fromChar; i >= toChar; i -= step) {
    list.push(String.fromCharCode(i));
  }
  return list;
}

function _charRange(fromChar: number, toChar: number, step: number) {
  return fromChar < toChar ? up(fromChar, toChar, step) : down(fromChar, toChar, step);
}

export const charRange = (from: string, to: string, step = 1): string[] => {

  if (step <= 0) {
    throw Error('step must be greater than 0');
  }
  if (from.length !== 1) {
    throw Error('from must be a character (length: 1)');
  }
  if (to.length !== 1) {
    throw Error('to must be a character (length: 1)');
  }

  return _charRange(from.charCodeAt(0), to.charCodeAt(0), step);

};
