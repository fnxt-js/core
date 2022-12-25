import {expect} from 'chai';
import {isEmpty} from '../../../../src/array';


describe('isEmpty', () => {


  it('should isEmpty', () => {
    const array = [1, 2, 3, 4];
    const fn = isEmpty;
    expect(fn(array)).to.eql(false);
    expect(fn([])).to.eql(true);
  });
});
