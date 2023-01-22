import {expect} from 'chai';
import {None, of, Some} from '../../../../src/option';

describe('of', () => {

  it('should of Nullable', () => {

    expect(of(null)).to.eql(None);
    expect(of(undefined)).to.eql(None);

  });
  it('should of falsy', () => {
    expect(of(false)).to.eql(Some(false));
    expect(of(0)).to.eql(Some(0));
    expect(of('')).to.eql(Some(''));
    expect(of(NaN)).to.eql(Some(NaN));
  });
  it('should of NonNullable', () => {
    expect(of(1)).to.eql(Some(1));
    expect(of({a: 42})).to.eql(Some({a: 42}));
  });
  it('should of nested', () => {
    expect(of(None)).to.eql(Some(None));
    expect(of(Some(1))).to.eql(Some(Some(1)));

  });
});
