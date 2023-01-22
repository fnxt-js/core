import {None, Some, toSeq} from '../../../../src/option';
import {expect} from 'chai';


describe('toSeq', () => {

  it('should toSeq of Some', () => {
    expect([...toSeq(Some(42))]).to.eql([42]);
  });
  it('should toSeq of None', () => {
    expect([...toSeq(None)]).to.eql([]);
  });

});
