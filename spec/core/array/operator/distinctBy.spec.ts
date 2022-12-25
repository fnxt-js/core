import {expect} from 'chai';
import {distinctBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('distinctBy', () => {
  it('should distinctBy', () => {
    const fn = distinctBy<string>(x => x.length);
    expect(fn(['hello', 'world', 'foo'])).to.eql(['foo', 'hello']);

  });
  it('should distinctBy of empty', () => {
    const fn = distinctBy<string>(x => x.length);
    expect(fn([])).to.eql([]);
  });
  
  it('should throw if null or undefined', () => {
    const fn = distinctBy<string>(x => x.length);
    checkThrow(fn);
  });
});
