import {expect} from 'chai';
import {countBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('countBy', () => {
  it('should countBy', () => {
    const fn = countBy<string>(x => x.length);
    expect(fn(['hello', 'world', 'foo'])).to.eql([['3', 1], ['5', 2],]);
  });
  it('should countBy of empty', () => {
    const fn = countBy<string>(x => x.length);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = countBy<string>(x => x.length);
    checkThrow(fn);
  });
});
