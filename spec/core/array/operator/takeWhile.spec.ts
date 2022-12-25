import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {takeWhile} from '../../../../src/array';

describe('takeWhile', () => {

  it('should takeWhile', () => {
    const array = [1, 2, 3, 4, 1];
    const fn = takeWhile<number>(x => x < 3);
    expect(fn(array)).to.eql([1, 2]);
    expect(fn([3, 4])).to.eql([]);
    expect(fn([1])).to.eql([1]);
    expect(fn([])).to.eql([]);
  });
  it('should takeWhile string', () => {

    const fn = takeWhile<string>(x => x.length < 3);
    expect(fn(['1', '2a', '3aa', '4aaa', '1'])).to.eql(['1', '2a']);
    expect(fn(['aa', 'bb', 'cc'])).to.eql(['aa', 'bb', 'cc']);
    expect(fn(['3aa', '4aaa'])).to.eql([]);
    expect(fn(['1'])).to.eql(['1']);
    expect(fn([])).to.eql([]);
  });

  it('should return empty if empty', () => {
    const fn = takeWhile<string>(x => x.length < 3);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = takeWhile<string>(x => x.length < 3);
    checkThrow(fn);
  });

});
