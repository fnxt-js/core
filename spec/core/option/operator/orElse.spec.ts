import {None, orElse, Some} from '../../../../src/option';
import {expect} from 'chai';

const some = Some(41);
const someOther = Some(42);
const none = None;
describe('orElse', () => {

  it('should orElse some or someOther', () => {
    expect(orElse(someOther)(some)).to.eql(some);
  });
  it('should orElse some or none', () => {
    expect(orElse(none)(some)).to.eql(some);
  });
  it('should orElse none or some', () => {
    expect(orElse(some)(none)).to.eql(some);
  });
  it('should orElse none or none', () => {
    expect(orElse(none)(none)).to.eql(none);
  });



});
