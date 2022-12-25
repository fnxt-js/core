import {expect} from 'chai';
import {compareWith, range} from '../../../../src/array';

describe('compareWith', () => {
  it('should compareWith minimal', () => {
    const fn = compareWith<number>((a, b) => a - b);

    expect(fn([1])([1, 2])).to.lt(0);
    expect(fn([1, 2])([1])).to.gt(0);
    expect(fn([])([1])).to.lt(0);
    expect(fn([1])([])).to.gt(0);

    expect(fn([1, 1])([1, 2])).to.lt(0);
    expect(fn([1, 2])([1, 1])).to.gt(0);
  });

  it('should compareWith long', () => {
    const fn = compareWith<number>((a, b) => a - b);
    const r10 = range(0, 10);
    const r11 = range(0, 11);
    expect(fn(r10)(r10)).to.eq(0);
    expect(fn(r11)(r10)).to.gt(0);
    expect(fn(r10)(r11)).to.lt(0);

  });

  it('should compareWith in between', () => {
    const fn = compareWith<number>((a, b) => a - b);
    const r10 = range(0, 10);
    const b0 = [...r10, 0, ...r10];
    const b1 = [...r10, 1, ...r10];
    expect(fn(b1)(b0)).to.gt(0);
    expect(fn(b0)(b1)).to.lt(0);
  });

  it('should compareWith example', () => {
    const fn = compareWith<number>((a, b) => a - b);
    expect(fn([1, 2, 3])([1, 2, 4])).to.lt(0);
    expect(fn([1, 2, 3])([1, 2, 3])).to.eq(0);

  });


});
