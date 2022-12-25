import {expect} from 'chai';
import {length} from '../../../../src/array';


describe('length', () => {

  it('should get length', () => {

    expect(length([1, 2, 3])).to.eql(3);
  });

  it('should get length of empty', () => {
    expect(length([])).to.eql(0);
  });

});

