import {bind, flatten, None, Option, Some} from '../../../../src/option';
import {expect} from 'chai';

const id = <E>(e: E): E => e;
type ID<E> = (e: E) => E

describe('flatten', () => {
  it('should flatten', () => {
    const some = Some(Some(42));
    const someOfNone = Some(None);
    const none = None;
    const fn = flatten;

    expect(fn(some)).to.eql(Some(42));
    expect(fn(someOfNone)).to.eql(None);
    expect(fn(none)).to.eql(None);
  });

  it('should be equivalent bind id', () => {
    const some = Some(Some(42));
    const someOfNone = Some(None);
    const none = None;
    const fn = flatten;
    const fn2 = bind<Option<number>, number>(id as ID<Option<number>>);

    expect(fn2(none)).to.eql(fn(none));
    expect(fn2(some)).to.eql(fn(some));
    expect(fn2(someOfNone)).to.eql(fn(someOfNone));
  });
});
