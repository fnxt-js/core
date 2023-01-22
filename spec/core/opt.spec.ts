import {expect} from 'chai';
import 'mocha';
import {
  bind,
  count,
  defaultValue,
  defaultWith,
  exists,
  filter,
  flatten,
  isNone,
  isSome,
  map,
  None,
  of,
  Option,
  OptionType,
  Some,
} from '../../src/option';
import {pipe} from '../../src/pipe';
import {stub} from 'sinon';


describe('option', () => {
  describe('constrution', () => {
    it('should build None', () => {
      expect(None).to.eql(None);
      expect(isNone(None)).to.eql(true);
      expect(isSome(None)).to.eql(false);
    });


    it('should build Some', () => {
      const some = Some(42);
      expect(some).to.eql(Some(42));
      expect(some.value).to.eql(42);
      expect(isSome(some)).to.eql(true);
      expect(isNone(some)).to.eql(false);
    });
  });

  describe('operator', () => {
    const operators = [
      'bind',
      'count',
      'defaultValue',
      'defaultWith',
      'exists',
      'filter',
      'flatten',
      'fold',
      'foldBack',
      'forall',
      'isSome',
      'iter',
      'map',
      'of',
      'orElse',
      'orElseWith',
      'toArray',
      'toSeq',
    ]
      .sort();
    operators.map(name => './option/operator/' + name + '.spec')
      .forEach(require);
  });


  describe('pipe', () => {
    it('should map and bind', () => {
      const fn = pipe(
        (x: number) => Some<number>(x),
        bind((x) => Some(x + 1)),
        map((x) => x * 2),
        defaultValue(-1)
      );
      expect(fn(3)).to.eql(8);
    });
  });

  describe('deprecation', () => {
    it('should still work with OptionType', () => {
      expect(Some(42).type).to.eql(OptionType.Some);
      expect(None.type).to.eql(OptionType.None);
      let x = Some(42) as Option<number>;
      const s = stub();
      const n = stub();
      if (x.type == OptionType.Some) {
        expect(x.value).to.eql(42);
        s();
      }
      if (x.type == OptionType.None) {
        n();
      }
      expect(s).to.be.callCount(1);
      expect(n).to.be.callCount(0);
    });
  });
});
