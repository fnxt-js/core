import {expect} from 'chai';

import {None, Some} from '../../../../src/option';
import {checkThrow} from '../../../support/checkThrow';
import {choose} from '../../../../src/array';

describe('choose', () => {


  it('should choose', () => {
    const array = [1, 2, 3, 4];
    const fn = choose<number, string>((x) => x >= 3 ? Some(`${x + 1}`) : None);
    expect(fn(array)).to.eql(['4', '5']);
    expect(array).to.eql([1, 2, 3, 4]);
  });
  it('should choose empty', () => {
    const array: number[] = [];
    const fn = choose<number, string>((x) =>
      x >= 3 ? Some(`${x + 1}`) : None
    );
    expect(fn(array)).to.eql([]);
  });


  it('should throw if null or undefined', () => {
    const fn = choose<number, string>((x) =>
      x >= 3 ? Some(`${x + 1}`) : None
    );
    checkThrow(fn);
  });
});
