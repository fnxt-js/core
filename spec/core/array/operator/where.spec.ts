import {expect} from 'chai';
import {filter, where} from '../../../../src/array';

describe('where', () => {
  it('should be alias of where', () => {
    expect(where).to.be.eq(filter);
  });
});
