import {map, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('map', () => {
  it('should map Some', () => {
    const some = Some(42);
    const fn = map((x: number) => x + 1);

    expect(fn(some)).to.eql(Some(43));
  });
  it('should not map None', () => {
    const none = None;
    const fn = map((x: number) => x + 1);

    expect(fn(none)).to.eql(none);
  });
});
