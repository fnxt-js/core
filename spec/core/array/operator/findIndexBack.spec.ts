import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {findIndexBack} from '../../../../src/array';

describe('findIndexBack', () => {

  it('should findIndexBack', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndexBack<number>(x => x == 3);
    expect(fn(array)).to.eql(2);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should findIndexBack ambiguous', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndexBack<number>(x => x % 2 == 1);
    expect(fn(array)).to.eql(2);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should not findIndexBack', () => {
    const array = [1, 2, 3, 4];
    const fn = findIndexBack<number>(x => x === 5);
    expect(() => fn(array)).to.throw('Not found');
  });

  it('should throw if empty', () => {
    const fn = findIndexBack<string>((x: string) => x.length === 5);
    expect(() => fn([])).to.throw('Array empty');
  });

  it('should throw if null or undefined', () => {
    const fn = findIndexBack<number>(x => x === 5);
    checkThrow(fn);
  });
});
