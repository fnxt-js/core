import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {reduceBack} from '../../../../src/array';

describe('reduceBack', () => {
  it('should reduceBack', () => {
    const array: string[] = ['1', '2', '3', '4'];
    const fn = reduceBack<string>((a: string, b: string) => a + b);
    expect(fn(array)).to.eql('4321');
  });

  it('should not reduceBack if empty', () => {
    const fn = reduceBack<number>((a, b) => a + b);
    expect(() => fn([])).to.throw();
  });

  it('should throw if null or undefined', () => {
    const fn = reduceBack<number>((a, b) => a + b);
    checkThrow(fn);
  });
});
