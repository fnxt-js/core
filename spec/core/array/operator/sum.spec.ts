import {sum} from '../../../../src/array';
import {expect} from 'chai';

describe('sum', () => {
  it('should sum', () => {
    const array = [1, 2, 3, 4,];
    expect(sum(array)).to.eql(10);
  });
});
