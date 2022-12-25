import {expect} from 'chai';
import {sortBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortBy', () => {


  it('should sortBy', () => {
    const array = ['hello', 'foo', 'hello world', 'world'];
    const fn = sortBy<string>(e => e.length);
    expect(fn(array)).to.eql(['foo', 'hello', 'world', 'hello world']);
    expect(array).to.eql(['hello', 'foo', 'hello world', 'world']);
    expect(fn([])).to.eql([]);
  });

  it('should sortBy first char', () => {
    const array = ['hello', 'foo', 'world', 'typescript'];
    const fn = sortBy<string>(e => e[0]);
    expect(fn(array)).to.eql(['foo', 'hello', 'typescript', 'world']);
    expect(array).to.eql(['hello', 'foo', 'world', 'typescript']);
    expect(fn([])).to.eql([]);
  });


  it('should throw if null or undefined', () => {
    const fn = sortBy<string>(e => e[0]);
    checkThrow(fn);
  });
});
