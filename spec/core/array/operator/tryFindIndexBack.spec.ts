import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {None, Some} from '../../../../src/option';
import {tryFindIndexBack} from '../../../../src/array';

describe('tryFindIndexBack', () => {

  it('should tryFindIndexBack', () => {
    const array = [1, 2, 3, 4];
    const fn = tryFindIndexBack<number>(x => x === 3);
    expect(fn(array)).to.eql(Some(2));
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should not tryFindIndexBack', () => {
    const array = [1, 2, 3, 4];
    const fn = tryFindIndexBack<number>(x => x === 5);
    expect(fn(array)).to.eql(None);
  });

  it('should throw if null or undefined', () => {
    const fn = tryFindIndexBack<number>(x => x === 5);
    checkThrow(fn);
  });
});
