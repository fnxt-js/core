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
  Option,
  Some
} from '../../src/option';
import {pipe} from '../../src/pipe';
import {range} from '../../src/array';
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

  describe('operators', () => {
    it('should map Some', () => {
      const some = Some(42);
      const fn = map((x: number) => x + 1);

      expect(fn(some)).to.eql(Some(43));
    });
    it('should not map None', () => {
      const none = None;
      const fn = map((x: number) => x + 1);

      expect(fn(none)).to.eql(none);
    });

    it('should bind Some', () => {
      const some = Some(42);
      const fn = bind((x: number) => Some(x + 1));

      expect(fn(some)).to.eql(Some(43));
    });

    it('should not bind None', () => {
      const none = None;
      const fn = bind((x: number) => Some(x + 1));

      expect(fn(none)).to.eql(none);
    });

    it('should use defaultValue', () => {
      const none = None;
      const fn = defaultValue(42);

      expect(fn(none)).to.eql(42);
    });

    it('should not use defaultValue', () => {
      const some = Some(1);
      const fn = defaultValue(42);

      expect(fn(some)).to.eql(1);
    });
    it('should use defaultWith', () => {
      const none = None;
      const fn = defaultWith(() => 42);

      expect(fn(none)).to.eql(42);
    });

    it('should not use defaultWith', () => {
      const some = Some(1);
      const fn = defaultWith(() => 42);

      expect(fn(some)).to.eql(1);
    });

    it('should filter', () => {
      const some42 = Some(42);
      const some41 = Some(41);
      const none = None;
      const fn = filter((e: number) => e < 42);

      expect(fn(some42)).to.eql(None);
      expect(fn(some41)).to.eql(some41);
      expect(fn(none)).to.eql(None);
    });

    it('should exists', () => {
      const some42 = Some(42);
      const some41 = Some(41);
      const none = None;
      const fn = exists((e: number) => e < 42);

      expect(fn(some42)).to.eql(false);
      expect(fn(some41)).to.eql(true);
      expect(fn(none)).to.eql(false);
    });

    it('should count', () => {
      const some = Some(42);
      const none = None;
      const fn = count;

      expect(fn(some)).to.eql(1);
      expect(fn(none)).to.eql(0);
    });
    it('should flatten', () => {
      const some = Some(Some(42));
      const someOfNone = Some(None);
      const none = None;
      const fn = flatten;

      expect(fn(some)).to.eql(Some(42));
      expect(fn(someOfNone)).to.eql(None);
      expect(fn(none)).to.eql(None);
    });
  });


  describe('isSome or isNone', () => {


    range(0, 100).forEach((i) => {
      it('should isSome or isNone: ' + i, () => {

        const getOption = (n:number): Option<number> => n % 2 == 0 ? Some(i) : None;

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
});
