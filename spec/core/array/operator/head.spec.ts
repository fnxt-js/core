import {head} from '../../../../src/array';
import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';

describe('head ', () => {
  it('should head', () => {
    const array = [1, 2, 3, 4];

    expect(head(array)).to.eql(1);
  });


  it('should throw if array is empty', () => {
    expect(() => head([])).to.throw();
  });


  it('should throw if null or undefined', () => {
    checkThrow(head);
  });
});
