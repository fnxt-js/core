import {expect} from 'chai';
import {None, Some} from '../../../../src/option';
import {checkThrow} from '../../../support/checkThrow';
import {tryHead} from '../../../../src/array';

describe('tryHead', () => {

  it('should tryHead', () => {
    const array: number[] = [1, 2, 3, 4];
    expect(tryHead(array)).to.eql(Some(1));
  });

  it('should not tryHead if empty', () => {
    expect(tryHead([])).to.eql(None);
  });

  it('should throw if null or undefined', () => {
    checkThrow(tryHead);
  });
});
