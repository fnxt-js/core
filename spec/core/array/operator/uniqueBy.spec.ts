import {expect} from 'chai';
import {uniqueBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('uniqueBy', () => {

  it('should uniqueBy', () => {
    const array = ['hello', 'foo', 'fnxt'];
    const fn = uniqueBy<string>((a) => a.length);
    expect(fn(array)).to.eql(['hello', 'foo', 'fnxt']);
    expect(array).to.eql(['hello', 'foo', 'fnxt']);
  });

  it('should uniqueBy length', () => {
    const array = ['hello', 'world', 'foo', 'fnxt'];
    const fn = uniqueBy<string>((a) => a.length);
    expect(fn(array)).to.eql(['hello', 'foo', 'fnxt']);
    expect(array).to.eql(['hello', 'world', 'foo', 'fnxt']);
  });

  it('should uniqueBy first char', () => {
    const array = ['hello', 'world', 'foo', 'fnxt'];
    const fn = uniqueBy<string>((a) => a[0]);
    expect(fn(array)).to.eql(['hello', 'world', 'foo']);
    expect(array).to.eql(['hello', 'world', 'foo', 'fnxt']);
  });

  it('should return empty', () => {
    const fn = uniqueBy<string>((a) => a[0]);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = uniqueBy<string>((a) => a[0]);
    checkThrow(fn);
  });


});
