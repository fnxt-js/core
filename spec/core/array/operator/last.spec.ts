import {expect} from 'chai';
import {last} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('last', () => {

  it('should last if one element', () => {
    expect(last([1])).to.eql(1);
  });

  it('should last multiple elements', () => {
    expect(last([1, 2, 3, 4])).to.eql(4);
  });

  it('should throw if empty', () => {
    const fn = last;
    expect(() => fn([])).to.throw();
  });

  it('should throw if null or undefined', () => {
    checkThrow(last);
  });
});
