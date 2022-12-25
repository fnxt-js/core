import {expect} from 'chai';
import {sortWith} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortWith', () => {
  it('should sortWith', () => {
    const array = ['hello', 'foo', 'fnxt'];
    const fn = sortWith<string>((a, b) => a.length - b.length);
    expect(fn(array)).to.eql(['foo', 'fnxt', 'hello']);
    expect(array).to.eql(['hello', 'foo', 'fnxt']);
  });

  it('should sort empty', () => {
    const fn = sortWith<string>((a, b) => a.length - b.length);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = sortWith<string>((a, b) => a.length - b.length);
    checkThrow(fn);
  });


});
