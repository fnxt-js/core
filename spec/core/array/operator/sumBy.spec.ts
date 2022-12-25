import {expect} from 'chai';
import {sumBy} from '../../../../src/array';

describe('sumBy', () => {
  it('should sumBy', () => {
    const array = ['aa', 'a', 'aaaa', 'aaa',];
    const fn = sumBy<string>((p) => p.length);
    expect(fn(array)).to.eql(10);
  });
});
