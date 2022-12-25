import {expect} from 'chai';

import {None, Some} from '../../../../src/option';
import {checkThrow} from '../../../support/checkThrow';
import {tryLast} from '../../../../src/array';

describe('tryLast', () => {
  it('should tryLast', () => {
    const array: number[] = [1, 2, 3, 4];
    expect(tryLast(array)).to.eql(Some(4));
  });

  it('should not tryLast if empty', () => {
    expect(tryLast([])).to.eql(None);
  });

  it('should throw if null or undefined', () => {
    checkThrow(tryLast);
  });
});
