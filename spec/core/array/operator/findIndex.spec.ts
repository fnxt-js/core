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

  it('should not findIndex', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndex<number>(x => x === 5);
    expect(() => fn(array)).to.throw();
  });

  it('should throw if null or undefined', () => {
    const fn = findIndex<number>(x => x === 5);
    checkThrow(fn);
  });
});
