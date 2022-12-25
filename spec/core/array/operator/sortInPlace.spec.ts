import {expect} from 'chai';
import {sortInPlace} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortInPlace', () => {

  it('should sortInPlace', () => {
    const array = ['hello', 'foo', 'world'];
    expect(sortInPlace(array)).to.eql(['foo', 'hello', 'world']);
    expect(array).to.eql(['foo', 'hello', 'world']);
  });

  it('should sort empty', () => {
    expect(sortInPlace([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    checkThrow(sortInPlace);
  });

});
