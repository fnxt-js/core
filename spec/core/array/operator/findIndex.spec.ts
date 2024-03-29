import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {findIndex} from '../../../../src/array';

describe('findIndex', () => {

  it('should findIndex', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndex<number>(x => x === 3);
    expect(fn(array)).to.eql(2);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should findBackIndex ambiguous', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndex<number>(x => x % 2 == 0);
    expect(fn(array)).to.eql(1);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should not findIndex', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndex<number>(x => x === 5);
    expect(() => fn(array)).to.throw('Not found');
  });

  it('should throw if empty', () => {
    const fn = findIndex<string>((x: string) => x.length === 5);
    expect(() => fn([])).to.throw('Array empty');
  });

  it('should throw if null or undefined', () => {
    const fn = findIndex<number>(x => x === 5);
    checkThrow(fn);
  });
});
