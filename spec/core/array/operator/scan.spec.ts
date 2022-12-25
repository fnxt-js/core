import {expect} from 'chai';
import {scan} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('scan', () => {
  it('should scan', () => {
    const array = [1, 2, 3, 4];
    const fn = scan<number, number>((p, c) => p + c)(0);
    expect(fn(array)).to.eql([0, 1, 3, 6, 10]);
  });


  it('should throw if null or undefined', () => {
    const fn = scan<number, number>((p, c) => p + c)(0);
    checkThrow(fn);
  });
});
