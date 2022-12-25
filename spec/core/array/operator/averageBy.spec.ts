import {averageBy} from '../../../../src/array';
import {expect} from 'chai';

describe('averageBy', () => {
  it('should averageBy', () => {
    const array = ['aa', 'a', 'aaaa', 'aaa',];
    const fn = averageBy<string>((p) => p.length);
    expect(fn(array)).to.approximately(2.5, 0.000001);
  });
});
