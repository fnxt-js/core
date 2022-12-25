import {expect} from 'chai';
import {replicate} from '../../../../src/array';

describe('replicate', () => {

  it('should replicate array', () => {
    const fn = replicate(3);
    expect(fn([1, 2])).to.eql([[1, 2], [1, 2], [1, 2]]);
  });
  it('should replicate val', () => {
    const fn = replicate(3);
    expect(fn('a')).to.eql(['a', 'a', 'a']);
  });
  it('should replicate empty', () => {
    const fn = replicate(3);
    expect(fn([])).to.eql([[], [], [],]);
  });
  it('should replicate null', () => {
    const fn = replicate(3);
    expect(fn(null)).to.eql([null, null, null,]);
  });
});
