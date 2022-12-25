import {expect} from 'chai';
import {fill, range} from '../../../../src/array';


describe('fill', () => {

  it('should fill', async () => {
    const array = range(0, 3);
    const fn = fill(42);
    expect(fn(array)).to.eql([42, 42, 42]);
  });

});

