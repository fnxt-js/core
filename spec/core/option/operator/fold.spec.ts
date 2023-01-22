import {expect} from 'chai';
import {fold, None, Some} from '../../../../src/option';

describe('fold', () => {

  it('should fold Some', () => {
    const fn = fold((a:number, b:number) => a + b);
    expect(fn(1)(Some(4))).to.eql(5);
  });

  it('should fold None', () => {
    const fn = fold((a:number, b:number) => a + b);
    expect(fn(1)(None)).to.eql(1);
  });

});
