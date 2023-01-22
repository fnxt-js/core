import {forall, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('forall', () => {

  it('should foldBack Some', () => {
    const fn = forall((a:number) => a > 5);
    expect(fn(Some(5))).to.eql(false);
    expect(fn(Some(6))).to.eql(true);
  });

  it('should foldBack None', () => {
    const fn = forall((a:number) => a > 5);
    expect(fn(None)).to.eql(true);
  });

});
