import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {findBack} from '../../../../src/array';

describe('findBack', () => {
  it('should findBack', () => {
    const fn = findBack<string>((x: string) => x.length === 5);
    expect(fn(['hello', 'world', 'foo'])).to.eql('world');
  });

  it('should findBack first', () => {
    const fn = findBack<string>((x: string) => x === 'first');
    expect(fn(['first', 'middle', 'last'])).to.eql('first');
  });
  it('should findBack last', () => {
    const fn = findBack<string>((x: string) => x === 'last');
    expect(fn(['first', 'middle', 'last'])).to.eql('last');
  });
  it('should findBack middle', () => {
    const fn = findBack<string>((x: string) => x === 'middle');
    expect(fn(['first', 'middle', 'last'])).to.eql('middle');
  });

  it('should throw not found', () => {
    const fn = findBack<string>((x: string) => x.length === 5);
    expect(() => fn(['foo'])).to.throw('Not found');
  });
  it('should throw if empty', () => {
    const fn = findBack<string>((x: string) => x.length === 5);
    expect(() => fn([])).to.throw('Array empty');
  });

  it('should throw if null or undefined', () => {
    const fn = findBack<string>((x: string) => x.length === 5);
    checkThrow(fn);
  });
});
