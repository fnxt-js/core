import {defaultWith, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('defaultWith', () => {
  it('should use defaultWith', () => {
    const none = None;
    const fn = defaultWith(() => 42);

    expect(fn(none)).to.eql(42);
  });

  it('should not use defaultWith', () => {
    const some = Some(1);
    const fn = defaultWith(() => 42);

    expect(fn(some)).to.eql(1);
  });
});
