import {expect} from 'chai';
import {sort} from '../../../../src/array';

describe('sort', () => {

  it('should sort', () => {
    const array = ['hello', 'foo', 'world'];
    const fn = sort;
    expect(fn(array)).to.eql(['foo', 'hello', 'world']);
    expect(array).to.eql(['hello', 'foo', 'world']);
    expect(fn([])).to.eql([]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => fn(null)).to.throw();
  });
});
