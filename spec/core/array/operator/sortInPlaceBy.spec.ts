import {expect} from 'chai';
import {sortInPlaceBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortInPlaceBy', () => {
  it('should sortInPlaceBy', () => {
    const array = ['hello', 'foo', 'world'];
    const fn = sortInPlaceBy<string>(e => e.length);
    expect(fn(array)).to.eql(['foo', 'hello', 'world']);
    expect(array).to.eql(['foo', 'hello', 'world']);

  });

  it('should sort empty', () => {
    const fn = sortInPlaceBy<string>(e => e.length);
    expect(fn([])).to.eql([]);
  })

  it('should throw if null or undefined', () => {
    const fn = sortInPlaceBy<string>(e => e.length);
    checkThrow(fn);
  });
});
