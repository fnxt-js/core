import {expect} from 'chai';
import {sortDescending} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortDescending', () => {

  it('should sortDescending', () => {
    const array = ['hello', 'foo', 'world'];
    expect(sortDescending(array)).to.eql(['world', 'hello', 'foo',]);
    expect(array).to.eql(['hello', 'foo', 'world']);
  });
  it('should sort empty', () => {
    expect(sortDescending([])).to.eql([]);
  })

  it('should throw if null or undefined', () => {
    checkThrow(sortDescending);
  });
});
