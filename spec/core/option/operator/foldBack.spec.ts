import {expect} from 'chai';
import {foldBack, None, Some} from '../../../../src/option';

describe('foldBack', () => {

  it('should foldBack Some', () => {
    const fn = foldBack((a:number, b:number) => a + b);
    expect(fn(Some(4))(1)).to.eql(5);
  });

  it('should foldBack None', () => {
    const fn = foldBack((a:number, b:number) => a + b);
    expect(fn(None)(1)).to.eql(1);
  });

});
