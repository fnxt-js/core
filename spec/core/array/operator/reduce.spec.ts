import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {reduce} from '../../../../src/array';

describe('reduce', () => {
  it('should reduce', () => {
    const array: string[] = ['1', '2', '3', '4'];
    const fn = reduce<string>((a: string, b: string) => a + b);
    expect(fn(array)).to.eql('1234');
  });

  it('should not reduce if empty', () => {
    const fn = reduce<number>((a: number, b: number) => a + b);
    expect(() => fn([])).to.throw();
  });


  it('should throw if null or undefined', () => {
    const fn = reduce<number>((a: number, b: number) => a + b);
    checkThrow(fn);
  });
});
