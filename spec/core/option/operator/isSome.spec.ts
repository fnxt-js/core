import {range} from '../../../../src/array';
import {isNone, isSome, None, Option, Some} from '../../../../src/option';
import {stub} from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';

const {expect} = chai;
chai.use(sinonChai);

describe('isSome or isNone', () => {

  range(0, 1).forEach((i) => {
    it('should isSome or isNone: ' + i, () => {
      const getOption = (n: number): Option<number> => n % 2 == 0 ? Some(i) : None;
      const a: Option<number> = getOption(i);
      const s = stub();

      if (isSome(a)) {
        expect(a).to.have.property('value');
        expect(a.value).to.eql(i);
        s();
      }
      if (isNone(a)) {
        expect(a).not.to.have.property('value');
        s();
      }
      expect(isNone(a)).not.to.eql(isSome(a));
      expect(s).to.be.callCount(1);
    });
  });

});
