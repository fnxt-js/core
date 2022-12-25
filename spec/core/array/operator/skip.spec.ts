import {expect} from 'chai';
import {skip} from '../../../../src/array';


describe('skip', () => {

  it('should skip', () => {
    const array = [1, 2, 3, 4];
    const fn = skip(2);
    expect(fn(array)).to.eql([3, 4]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should skip more than length', () => {
    const fn = skip(2);
    expect(fn([1])).to.eql([]);
  });

  it('should skip empty', () => {
    const fn = skip(2);
    expect(fn([])).to.eql([]);
  });
});
