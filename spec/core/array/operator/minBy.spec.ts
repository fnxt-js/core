import {minBy} from '../../../../src/array';
import {expect} from 'chai';

describe('minBy', () => {
  it('should minBy', () => {
    const array = ['aa', 'a', 'aaaa', 'aaa',];
    const fn = minBy<string>((p) => p.length);
    expect(fn(array)).to.eql('a');
  });
});
