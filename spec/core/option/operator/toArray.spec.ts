import {None, Some, toArray} from '../../../../src/option';
import {expect} from 'chai';


describe('toArray', () => {

  it('should toArray of Some', () => {
    expect(toArray(Some(42))).to.eql([42]);
  });
  it('should toArray of None', () => {
    expect(toArray(None)).to.eql([]);
  });

});
