import {expect} from 'chai';
import {contains} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';


describe('contains', () => {

  it('should contains', () => {
    const fn = contains<string>('foo');
    expect(fn(['hello', 'world', 'foo'])).to.eql(true);
  });

  it('should not contains', () => {
    const fn = contains<string>('foo');
    expect(fn(['hello', 'world'])).to.eql(false);
  });

  it('should not contains if empty', () => {
    const fn = contains<string>('foo');
    expect(fn([])).to.eql(false);
  });

  it('should contains same', () => {
    // !be careful when dealing with non-primitives!
    const element = {foo: 42};
    const fn1 = contains<{ [k: string]: number }>(element);
    expect(fn1([element])).to.eql(true);
  });

  it('should not contains equal object', () => {
    // !be careful when dealing with non-primitives!
    const element = {foo: 42};
    const fn2 = contains<{ [k: string]: number }>({foo: 42});
    expect(fn2([element])).to.eql(false);
  });


  it('should not contains if null or undefined', () => {
    const fn = contains(1);
    checkThrow(fn);
  });

});
