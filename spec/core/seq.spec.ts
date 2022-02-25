import {expect} from 'chai';
import 'mocha';
import * as SEQ from 'fnxt/seq';
import {Seq, Thunk} from 'fnxt/fnxt-types';
import * as Opt from 'fnxt/option';


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

    describe('chooser', () => {

      it('should choose', () => {
        const seq = SEQ.range(0, 5, 1);
        const chooser = SEQ.choose((x: number) => x % 2 === 0 ? Opt.Some(x * 2) : Opt.None);
        runTwice(() => expect([...chooser(seq)]).to.eql([0, 4, 8]));
      });

    });

    describe('filter', () => {

      it('should filter', () => {
        const seq = SEQ.range(1, 5, 1);
        const even = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...even(seq)]).to.eql([2, 4]));
      });

      it('should filter', () => {
        const seq = SEQ.range(1, 5, 2);
        const even = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...even(seq)]).to.eql([]));
      });

      it('should filter empty', () => {
        const seq: Seq<number> = SEQ.empty;
        const even = SEQ.filter((x: number) => x % 2 === 0);
        runTwice(() => expect([...even(seq)]).to.eql([]));
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
