import {bind, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('bind', () => {
  it('should bind Some', () => {

    const fn = bind((x: number) => Some(x + 1));

    expect(fn(Some(42))).to.eql(Some(43));
  });

  it('should not bind None', () => {
    const fn = bind((x: number) => Some(x + 1));
    expect(fn(None)).to.eql(None);
  });
});
