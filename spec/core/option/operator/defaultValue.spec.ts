import {defaultValue, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('defaultValue', () => {
  it('should use defaultValue', () => {
    const none = None;
    const fn = defaultValue(42);

    expect(fn(none)).to.eql(42);
  });

  it('should not use defaultValue', () => {
    const some = Some(1);
    const fn = defaultValue(42);

    expect(fn(some)).to.eql(1);
  });
});
