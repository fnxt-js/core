import {None, orElseWith, Some} from '../../../../src/option';
import {expect} from 'chai';

const some = Some(41);
const someOther = Some(42);
const someOtherThunk = ()=>someOther;
const noneThunk =  ()=>None;
describe('orElseWith', () => {

  it('should orElseWith some or someOther', () => {
    expect(orElseWith(someOtherThunk)(some)).to.eql(some);
  });
  it('should orElseWith some or none', () => {
    expect(orElseWith(noneThunk)(some)).to.eql(some);
  });
  it('should orElseWith none or some', () => {
    expect(orElseWith(someOtherThunk)(None)).to.eql(someOther);
  });
  it('should orElse none or none', () => {
    expect(orElseWith(noneThunk)(None)).to.eql(None);
  });



});
