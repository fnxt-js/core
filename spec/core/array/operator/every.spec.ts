import {expect} from 'chai';
import {every, forall} from '../../../../src/array';


describe('every', () => {

  it('should be alias', async () => {

    expect(every).to.eq(forall);
  });

});

