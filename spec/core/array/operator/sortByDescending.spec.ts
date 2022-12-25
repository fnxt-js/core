import {expect} from 'chai';
import {sortByDescending} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('sortByDescending', () => {

  it('should sortByDescending (length)', () => {
    const array = ['hello', 'foo', 'hello world', 'world'];
    const fn = sortByDescending<string>((e) => e.length);
    expect(fn(array)).to.eql(['hello world', 'hello', 'world', 'foo',]);
    expect(array).to.eql(['hello', 'foo', 'hello world', 'world']);
  });
  it('should sortByDescending (first char)', () => {
    const array = ['hello', 'foo', 'world', 'typescript'];
    const fn = sortByDescending<string>(e => e[0]);
    expect(fn(array)).to.eql(['foo', 'hello', 'typescript', 'world'].reverse());
    expect(array).to.eql(['hello', 'foo', 'world', 'typescript']);
  });

  it('should sort empty', () => {
    const fn = sortByDescending<string>(e => e[0]);
    expect(fn([])).to.eql([]);
  })


  it('should throw if null or undefined', () => {
    const fn = sortByDescending<string>(e => e[0]);
    checkThrow(fn);
  });

  it('should sortByDescending stable', () => {
    const array = ['hello', 'foo', 'world'];
    const fn = sortByDescending<string>(e => e.length);
    expect(fn(array)).to.eql(['hello', 'world', 'foo']);
    expect(array).to.eql(['hello', 'foo', 'world']);
  });
});
