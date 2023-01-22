import {filter, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('filter', () => {
  it('should filter', () => {
    const some42 = Some(42);
    const some41 = Some(41);
    const none = None;
    const fn = filter((e: number) => e < 42);

    expect(fn(some42)).to.eql(None);
    expect(fn(some41)).to.eql(some41);
    expect(fn(none)).to.eql(None);
  });

});
