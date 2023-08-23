import {expect} from 'chai';
import {some} from '../../../../src/array';

describe('some', () => {

  it('should find element',  () => {
    const array = [1, 2, 3, 4, 5];
    expect(some((x: number) => x === 4)(array)).to.eq(true);
  });

});

