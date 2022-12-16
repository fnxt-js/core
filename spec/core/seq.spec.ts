import {expect} from 'chai';
import 'mocha';
import * as SEQ from '../../src/seq';
import {Seq, Thunk} from '../../src/fnxt-types';
import * as Opt from '../../src/option';


const lessThan = (v: number) => (x: number): boolean => x < v;
export const id = <E>(e: E): E => e;

/*
 IMPORTANT !
 Always test/assert twice - this ensures that sequences are consumed correct if used again
 */
const runTwice = <E>(e: Thunk<E>) => {
  e();
  e();
};

describe('sequence', () => {
  describe('generator', () => {
    describe('map', () => {

      it('should map', () => {
        const seq = SEQ.range(1, 4, 1);
        const plusOne = SEQ.map((x: number) => x + 1);
        runTwice(() => expect([...plusOne(seq)]).to.eql([2, 3, 4]));
      });

      it('should map empty', () => {
        const seq: Seq<number> = SEQ.empty;
        const plusOne = SEQ.map((x: number) => x + 1);
        runTwice(() => expect([...plusOne(seq)]).to.eql([]));
      });

    });

    describe('some', () => {
      it('should some', async () => {
        const seq1 = [3, 4, 1, 2, 5, 6];
        runTwice(() => expect(SEQ.some<number>(x => x > 0)(seq1)).to.eql(true));
        runTwice(() => expect(SEQ.some<number>(x => x > 1)(seq1)).to.eql(true));
        runTwice(() => expect(SEQ.some<number>(x => x > 6)(seq1)).to.eql(false));
        runTwice(() => expect(SEQ.some<number>(x => x > 6)([])).to.eql(false));
      });

    });

    describe('every', () => {
      it('should every', async () => {
        const seq1 = [3, 4, 1, 2, 5, 6];
        runTwice(() => expect(SEQ.every<number>(x => x > 0)(seq1)).to.eql(true));
        runTwice(() => expect(SEQ.every<number>(x => x > 1)(seq1)).to.eql(false));
        runTwice(() => expect(SEQ.every<number>(x => x > 6)(seq1)).to.eql(false));
        runTwice(() => expect(SEQ.every<number>(x => x > 6)([])).to.eql(true));
      });
    });
    describe('collect', async () => {
      it('should collect iterable', async () => {
        const gen = SEQ.range(1, 4);
        const mapping = (x: number) => SEQ.range(x, x + 2);
        const op = SEQ.collect(mapping);
        runTwice(() => expect([...op(gen)]).to.eql([1, 2, 2, 3, 3, 4]));
      });

      it('should collect iterable', async () => {
        const gen = SEQ.of(1, 2, 3,);
        const mapping = (x: number) => [x, x + 1];
        const op = SEQ.collect(mapping);
        runTwice(() => expect([...op(gen)]).to.eql([1, 2, 2, 3, 3, 4]));
      });

    });
    describe('chooser', () => {

      it('should choose', () => {
        const seq = SEQ.of(0, 1, 2, 3, 4);
        const chooser = SEQ.choose(
          (x: number) => x % 2 === 0
            ? Opt.Some(x * 2)
            : Opt.None
        );
        runTwice(() => expect([...chooser(seq)]).to.eql([0, 4, 8]));
      });

    });
    describe('toArray', () => {

      it('should convert toArray', () => {
        const seq = SEQ.range(0, 4, 1);
        const toArray = SEQ.toArray;
        runTwice(() => expect(toArray(seq)).to.eql([0, 1, 2, 3]));
      });

    });

    describe('filter', () => {

      it('should filter', () => {
        const seq = SEQ.range(1, 5, 1);
        const isEven = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...isEven(seq)]).to.eql([2, 4]));
      });

      it('should filter', () => {
        const seq = SEQ.range(1, 5, 2);
        const isEven = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...isEven(seq)]).to.eql([]));
      });

      it('should filter empty', () => {
        const seq: Seq<number> = SEQ.empty;
        const isEven = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...isEven(seq)]).to.eql([]));
      });

    });

    describe('isEmpty', () => {

      it('should be empty', async () => {
        const seq: Seq<number> = SEQ.empty;
        const isEmpty = SEQ.isEmpty;
        runTwice(() => expect(isEmpty(seq)).to.eql(true));
      });
      it('should be empty', async () => {
        const seq: Seq<number> = [];
        const isEmpty = SEQ.isEmpty;
        runTwice(() => expect(isEmpty(seq)).to.eql(true));
      });

      it('should not be empty', async () => {
        const seq: Seq<number> = SEQ.range(0, 1, 1);
        const isEmpty = SEQ.isEmpty;
        runTwice(() => expect(isEmpty(seq)).to.eql(false));
      });
      it('should not be empty', async () => {
        const seq: Seq<number> = [0];
        const isEmpty = SEQ.isEmpty;
        runTwice(() => expect(isEmpty(seq)).to.eql(false));
      });

    });

    describe('last', () => {

      it('should get length', async () => {
        const gen = SEQ.range(1, 4);
        const length = SEQ.length;
        runTwice(() => expect(length(gen)).to.eql(3));
      });

      it('should zero length', async () => {
        const gen = SEQ.empty;
        const length = SEQ.length;
        runTwice(() => expect(length(gen)).to.eql(0));
      });

    });

    describe('last', () => {

      it('should last', async () => {
        const gen = SEQ.range(1, 4);
        const last = SEQ.last;
        runTwice(() => expect(last(gen)).to.eql(3));
      });

      it('should last', async () => {
        const gen = SEQ.empty;
        const last = SEQ.last;
        runTwice(() => expect(() => last(gen)).to.throw);
      });
    });

    describe('reduce', () => {

      it('should reduce seq', async () => {
        const gen = SEQ.range(1, 4);
        const op = SEQ.reduce((x: number, y: number) => x + y);
        runTwice(() => expect(op(gen)).to.eql(6));
      });

      it('should reduce empty seq', async () => {
        const gen = SEQ.empty;
        const op = SEQ.reduce((x: number, y: number) => x + y);
        runTwice(() => expect(() => op(gen)).to.throw());
      });

      it('should reduce empty array', async () => {
        const op = SEQ.reduce((x: number, y: number) => x + y);
        runTwice(() => expect(() => op([])).to.throw());
      });

      it('should reduce array', async () => {
        const op = SEQ.reduce((x: number, y: number) => x + y);
        runTwice(() => expect(op([1, 2])).to.eql(3));
      });

    });

    describe('maxBy', async () => {
      it('should maxBy string.length', async () => {
        const b = ['hallo', 'world', 'seq.maxBy', 'some', 'other', 'value'];
        const op = SEQ.maxBy((e: string) => e.length);

        runTwice(() => expect(op(b)).to.eql('seq.maxBy')); // DO IT TWICE
      });
      it('should maxBy identity', async () => {
        const b = SEQ.range(-10, 10);
        const op = SEQ.maxBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(9)); // DO IT TWICE
      });
      it('should maxBy first', async () => {
        const b = [2, 1];
        const op = SEQ.maxBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(2)); // DO IT TWICE
      });
      it('should maxBy last', async () => {
        const b = [1, 2];
        const op = SEQ.maxBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(2)); // DO IT TWICE
      });
      it('should maxBy only', async () => {
        const b = [2];
        const op = SEQ.maxBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(2)); // DO IT TWICE
      });
      it('should maxBy none', async () => {
        const b: number[] = [];
        const op = SEQ.maxBy<number>(id);

        runTwice(() => expect(() => op(b)).to.throw()); // DO IT TWICE
      });
    });
    describe('minBy', async () => {
      it('should minBy string.length', async () => {
        const b = ['hallo', 'world', 'seq.maxBy', 'some', 'other', 'value'];
        const op = SEQ.minBy((e: string) => e.length);

        runTwice(() => expect(op(b)).to.eql('some')); // DO IT TWICE
      });
      it('should minBy identity', async () => {
        const b = SEQ.range(-10, 10);
        const op = SEQ.minBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(-10)); // DO IT TWICE
      });


      it('should minBy first', async () => {
        const b = [1, 2];
        const op = SEQ.minBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(1)); // DO IT TWICE
      });
      it('should minBy last', async () => {
        const b = [2, 1];
        const op = SEQ.minBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(1)); // DO IT TWICE
      });
      it('should minBy only', async () => {
        const b = [2];
        const op = SEQ.minBy<number>(id);

        runTwice(() => expect(op(b)).to.eql(2)); // DO IT TWICE
      });
      it('should minBy none', async () => {
        const b: number[] = [];
        const op = SEQ.minBy<number>(id);

        runTwice(() => expect(() => op(b)).to.throw()); // DO IT TWICE
      });

    });

    describe('chunk like', async () => {
      it('should chunkBySize empty', async () => {

        const seq = SEQ.range(0, 0);
        const chunkBySize = SEQ.chunkBySize(3);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([]));
      });

      it('should chunkBySize of by n=-1', async () => {

        const seq = SEQ.range(0, 5);
        const chunkBySize = SEQ.chunkBySize(-1);
        runTwice(() => expect(() => SEQ.toArray(chunkBySize(seq))).to.throw());
      });

      it('should chunkBySize of by n=1.1', async () => {

        const seq = SEQ.range(0, 5);
        const chunkBySize = SEQ.chunkBySize(1.1);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([[0], [1], [2], [3], [4],]));
      });

      it('should chunkBySize of by l%n=-1', async () => {

        const seq = SEQ.range(0, 5);
        const chunkBySize = SEQ.chunkBySize(3);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([[0, 1, 2], [3, 4],]));
      });

      it('should chunkBySize of by l%n=+1', async () => {
        const seq = SEQ.of(0, 1, 2, 3, 4, 5, 6);
        const chunkBySize = SEQ.chunkBySize(3);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([[0, 1, 2], [3, 4, 5], [6],]));
      });

      it('should chunkBySize of by l%n=0', async () => {
        const seq = SEQ.range(0, 6);
        const chunkBySize = SEQ.chunkBySize(3);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([[0, 1, 2], [3, 4, 5],]));
      });

      it('should chunkBySize one element', async () => {
        const seq = SEQ.range(0, 1);
        const chunkBySize = SEQ.chunkBySize(3);
        runTwice(() => expect(SEQ.toArray(chunkBySize(seq))).to.eql([[0]]));
      });
    });

    describe('takeWhile', () => {

      it('should takeWhile', async () => {
        const seq = SEQ.infinite(0, 1);
        const takeWhile = SEQ.takeWhile(lessThan(5));
        runTwice(() => expect([...takeWhile(seq)]).to.eql([0, 1, 2, 3, 4]));
      });
      it('should takeWhile empty', async () => {
        const seq = SEQ.infinite(5, 1);
        const takeWhile = SEQ.takeWhile(lessThan(5));
        runTwice(() => expect([...takeWhile(seq)]).to.eql([]));
      });
    });

    describe('head', () => {

      it('should head', () => {
        const seq1 = SEQ.infinite(4, 1);
        const head = SEQ.head;
        runTwice(() => expect(head(seq1)).to.eql(4));
      });
      it('should head', () => {
        const seq1 = SEQ.empty;
        const head = SEQ.head;
        runTwice(() => expect(() => head(seq1)).to.throw());
      });

    });

    describe('concat', () => {

      it('should concat', () => {
        const seq1 = SEQ.range(0, 4, 1);
        const seq2 = SEQ.range(10, 14, 1);
        const concat = SEQ.concat(seq1);
        runTwice(() => expect([...concat(seq2)]).to.eql([0, 1, 2, 3, 10, 11, 12, 13]));
      });

      it('should concat seq with empty', () => {
        const seq1 = SEQ.range(0, 4, 1);
        const seq2: Seq<number> = SEQ.empty;
        const concat = SEQ.concat(seq1);
        runTwice(() => expect([...concat(seq2)]).to.eql([0, 1, 2, 3]));
      });

      it('should concat empty with seq ', () => {
        const seq1: Seq<number> = SEQ.empty;
        const seq2 = SEQ.range(0, 4, 1);
        const concat = SEQ.concat(seq1);
        runTwice(() => expect([...concat(seq2)]).to.eql([0, 1, 2, 3]));
      });

      it('should concat empty with empty ', () => {
        const seq1: Seq<number> = SEQ.empty;
        const seq2: Seq<number> = SEQ.empty;
        const concat = SEQ.concat(seq1);
        runTwice(() => expect([...concat(seq2)]).to.eql([]));
      });

    });

    describe('range', () => {

      it('should count up', () => {
        const seq = SEQ.range(1, 4, 1);
        runTwice(() => expect([...seq]).to.eql([1, 2, 3]));
      });

      it('should count up2', () => {
        const seq = SEQ.range(1, 2, 1);
        runTwice(() => expect([...seq]).to.eql([1]));
      });

      it('should count up3', () => {
        const seq = SEQ.range(1, 1, 1);
        runTwice(() => expect([...seq]).to.eql([]));
      });

      it('should count down', () => {
        const seq = SEQ.range(4, 1, -1);
        runTwice(() => expect([...seq]).to.eql([4, 3, 2]));
      });

    });
  });
});
