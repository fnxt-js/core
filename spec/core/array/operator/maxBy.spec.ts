import {expect} from 'chai';
import {maxBy} from '../../../../src/array';

describe('maxBy', () => {
  it('should maxBy', () => {
    const array = ['aa', 'a', 'aaaa', 'aaa',];
    const fn = maxBy<string>((p) => p.length);
    expect(fn(array)).to.eql('aaaa');
  });
});
