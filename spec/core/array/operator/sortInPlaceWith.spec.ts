import {expect} from 'chai';
import {sortInPlaceWith} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortInPlaceWith', () => {

  it('should sortInPlaceWith', () => {
    const array = ['hello', 'foo', 'fnxt'];
    const fn = sortInPlaceWith<string>((a, b) => a.length - b.length);
    expect(fn(array)).to.eql(['foo', 'fnxt', 'hello']);
    expect(array).to.eql(['foo', 'fnxt', 'hello']);

  });
  it('should sort empty', () => {
    const fn = sortInPlaceWith<string>((a, b) => a.length - b.length);
    expect(fn([])).to.eql([]);
  })

  it('should throw if null or undefined', () => {
    const fn = sortInPlaceWith<string>((a, b) => a.length - b.length);
    checkThrow(fn);
  });
});
