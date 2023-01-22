import {iter, None, Some} from '../../../../src/option';

import {stub} from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';

const {expect} = chai;
chai.use(sinonChai);
describe('iter', () => {


  it('should iter Some: ', () => {
    const s = stub();
    const fn = iter((n: number) => s(n));

    fn(Some(42));
    expect(s).to.be.callCount(1);
    expect(s).to.be.calledWith(42);
  });

  it('should iter None: ', () => {
    const s = stub();
    const fn = iter((n: number) => s(n));

    fn(None);
    expect(s).to.be.callCount(0);
  });

});
