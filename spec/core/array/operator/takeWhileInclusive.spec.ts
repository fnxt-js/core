import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {takeWhileInclusive} from '../../../../src/array';

describe('takeWhileInclusive', () => {

  it('should takeWhileInclusive string', () => {
    const array: string[] = ['1', '2a', '3aa', '4aaa', '1'];
    const fn = takeWhileInclusive<string>(x => x.length < 3);
    expect(fn(array)).to.eql(['1', '2a', '3aa']);
    expect(fn(['3aa', '4aaa'])).to.eql(['3aa']);
    expect(fn(['1'])).to.eql(['1']);
  });


  it('should return empty if empty', () => {
    const fn = takeWhileInclusive<string>(x => x.length < 3);
    expect(fn([])).to.eql([]);
  });


  it('should throw if null or undefined', () => {
    const fn = takeWhileInclusive<string>(x => x.length < 3);
    checkThrow(fn);
  });
});
