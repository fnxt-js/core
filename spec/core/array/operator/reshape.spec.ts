import {expect} from 'chai';
import {reshape} from '../../../../src/array/';

describe('reshape', () => {


  it('should reshape []', () => {

    const fn = reshape([]);
    expect(fn([])).to.eql([]);
  });

  it('should reshape [1]', () => {

    const fn = reshape([1]);
    expect(fn([1])).to.eql([1]);
  });

  it('should reshape [2]', () => {

    const fn = reshape([1, 2]);
    expect(fn([1, 2])).to.eql([
      [1, 2],
    ]);
  });

  it('should reshape [1,2]', () => {

    const fn = reshape([1, 2]);
    expect(fn([1, 2])).to.eql([
      [1, 2],
    ]);
  });
  it('should reshape [2,3,2]', () => {

    const fn = reshape([2, 3, 2]);
    expect(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).to.eql(
      [
        [[1, 2], [3, 4], [5, 6]],
        [[7, 8], [9, 10], [11, 12]]
      ]
    );
  });
  it('should reshape [4, 3, 1]', () => {

    const fn = reshape([4, 3, 1]);
    expect(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).to.eql(
      [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]], [[10], [11], [12]]]
    );
  });
  it('should reshape [4, 3, 1]', () => {

    const fn = reshape([4, 3, 1]);
    expect(() => fn([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).to.throws();
  });


});


