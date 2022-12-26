import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {find} from '../../../../src/array';

describe('find', () => {
  it('should find', () => {
    const fn = find<string>((x: string) => x.length === 5);
    expect(fn(['bob', 'hello', 'world', 'foo'])).to.eql('hello');
  });
  it('should find first', () => {
    const fn = find<string>((x: string) => x === 'first');
    expect(fn(['first', 'middle', 'last'])).to.eql('first');
  });
  it('should find last', () => {
    const fn = find<string>((x: string) => x === 'last');
    expect(fn(['first', 'middle', 'last'])).to.eql('last');
  });
  it('should find middle', () => {
    const fn = find<string>((x: string) => x === 'middle');
    expect(fn(['first', 'middle', 'last'])).to.eql('middle');
  });
  it('should throw not found', () => {
    const fn = find<string>((x: string) => x.length === 5);
    expect(() => fn(['foo'])).to.throw('Not found');
  });
  it('should throw if empty', () => {
    const fn = find<string>((x: string) => x.length === 5);
    expect(() => fn([])).to.throw('Array empty');
  });

  it('should throw if null or undefined', () => {
    const fn = find<string>((x: string) => x.length === 5);
    checkThrow(fn);
  });
});
