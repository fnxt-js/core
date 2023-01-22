import {count, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('count', () => {
  it('should count', () => {
    expect(count(Some(42))).to.eql(1);
    expect(count(None)).to.eql(0);
  });
});
