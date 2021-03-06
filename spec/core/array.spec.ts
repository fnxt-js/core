// noinspection DuplicatedCode,UnnecessaryLocalVariableJS

import {expect} from 'chai';
import 'mocha';
import * as ARRAY from 'fnxt/array';
import {None, Some} from 'fnxt/option';

describe('array', () => {
  describe('generator', () => {

    it('should zero length', async () => {
      const array = ARRAY.empty;
      const length = ARRAY.length;
      expect(length(array)).to.eql(0);
    });

    it('should length', async () => {
      const array = ARRAY.of(1,2,3);
      const length = ARRAY.length;
      expect(length(array)).to.eql(3);
    });

  });
  describe('operator', () => {
    describe('map', () => {
      it('should map', () => {
        const array: number[] = [1, 2, 3, 4];
        const fn = ARRAY.map((x: number) => x + 1);
        expect(fn(array)).to.eql([2, 3, 4, 5]);
      });

      it('should map empty', () => {
        const array: number[] = [];
        const fn = ARRAY.map((x: number) => x + 1);
        expect(fn(array)).to.eql([]);
      });
    });

    describe('reduce', () => {
      it('should reduce', () => {
        const array: string[] = ['1', '2', '3', '4'];
        const fn = ARRAY.reduce<string>((a: string, b: string) => a + b);
        expect(fn(array)).to.eql('1234');
      });

      it('should not reduce', () => {
        const fn = ARRAY.reduce<number>((a: number, b: number) => a + b);
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('reduceBack', () => {
      it('should reduceBack', () => {
        const array: string[] = ['1', '2', '3', '4'];
        const fn = ARRAY.reduceBack<string>((a: string, b: string) => a + b);
        expect(fn(array)).to.eql('4321');
      });

      it('should not reduceBack', () => {
        const fn = ARRAY.reduceBack<number>((a, b) => a + b);
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('collect', () => {
      it('should collect', () => {
        const array = ['hello', 'world'];
        const fn = ARRAY.collect((e: string) => e.split(''));

        expect(fn(array)).to.eql([
          'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd',
        ]);
      });
    });

    describe('append', () => {
      it('should append', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const fn = ARRAY.append(array1);

        expect(fn(array2)).to.eql([1, 2, 3, 4, 5, 6]);
        expect(array1).to.eql([1, 2, 3]);
        expect(array2).to.eql([4, 5, 6]);
      });
    });
    describe('concat', () => {
      it('should concat', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const array3 = [7, 8, 9];
        const fn = ARRAY.concat;

        expect(fn([array1, array2, array3])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(array1).to.eql([1, 2, 3]);
        expect(array2).to.eql([4, 5, 6]);
        expect(array3).to.eql([7, 8, 9]);
      });
    });

    describe('allPairs', () => {
      it('should allPairs', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const fn = ARRAY.allPairs(array1);

        expect(fn(array2)).to.eql([
          [1, 4],
          [1, 5],
          [1, 6],
          [2, 4],
          [2, 5],
          [2, 6],
          [3, 4],
          [3, 5],
          [3, 6],
        ]);
      });
    });

    describe('flatten', () => {
      it('should flatten', () => {
        const fn = ARRAY.flatten;
        expect(fn([[1], [2, 3], [4]])).to.eql([1, 2, 3, 4]);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(fn([1] as any)).to.eql([1]);
      });

      it('should not flatten', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => flatten(null)).to.throw();
      });
    });

    describe('filter', () => {
      it('should filter 1', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.filter((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([1, 3]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('where', () => {
      it('should where', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.where((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([1, 3]);
        expect(fn([])).to.eql([]);
      });
    });

    describe('partition', () => {
      it('should partition 1', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.partition((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([[1, 3], [2, 4]]);
        expect(fn([])).to.eql([[], []]);
      });

      it('should partition 3', () => {
        const fn = ARRAY.partition((x: number) => x % 2 != 0);
        expect(fn([1, 3])).to.eql([[1, 3], []]);
        expect(fn([2, 4])).to.eql([[], [2, 4]]);
      });
      it('should not partition', () => {
        const fn = ARRAY.partition((x: number) => x % 2 != 0);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });

    });

    describe('head and tail', () => {
      it('should head', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.head;
        expect(fn(array)).to.eql(1);
      });
      it('should not head', () => {
        const fn = ARRAY.head;
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });

      it('should tail', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.tail;
        expect(fn(array)).to.eql([2, 3, 4]);
      });

      it('should empty tail', () => {
        const array = [1];
        const fn = ARRAY.tail;
        expect(fn(array)).to.eql([]);
      });
      it('should not tail', () => {
        const fn = ARRAY.tail;
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('length', () => {
      it('should length', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.length;
        expect(fn(array)).to.eql(4);
      });
    });

    describe('distinctBy', () => {
      it('should distinctBy', () => {
        const fn = ARRAY.distinctBy<string>(x => x.length);
        expect(fn(['hello', 'world', 'foo'])).to.eql(['foo', 'hello']);
        expect(fn([])).to.eql([]);
      });
      it('should not distinctBy', () => {
        const fn = ARRAY.distinctBy<string>(x => x.length);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('countBy', () => {
      it('should countBy', () => {
        const fn = ARRAY.countBy<string>(x => x.length);
        expect(fn(['hello', 'world', 'foo'])).to.eql([['3', 1], ['5', 2],]);
        expect(fn([])).to.eql([]);
      });
      it('should not countBy', () => {
        const fn = ARRAY.countBy<string>(x => x.length);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });


    describe('contains', () => {
      it('should contains 1', () => {
        const fn = ARRAY.contains<string>('foo');
        expect(fn(['hello', 'world', 'foo'])).to.eql(true);
        expect(fn(['hello', 'world'])).to.eql(false);
        expect(fn([])).to.eql(false);
      });

      it('should contains 2', () => {
        // !be careful when dealing with non-primitives!
        const element = {foo: 42};
        const fn1 = ARRAY.contains<{ [k: string]: number }>(element);
        const fn2 = ARRAY.contains<{ [k: string]: number }>({foo: 42});
        expect(fn1([element])).to.eql(true);
        expect(fn2([element])).to.eql(false);
      });

      it('should not distinctBy', () => {
        const fn = ARRAY.contains(1);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('fold', () => {
      it('should fold', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.fold<number, string>((p, c) => p + c)('');
        expect(fn(array)).to.eql('1234');
      });
    });

    describe('scan', () => {
      it('should scan', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.scan<number, number>((p, c) => p + c)(0);
        expect(fn(array)).to.eql([0, 1, 3, 6, 10]);
      });
    });

    describe('minBy', () => {
      it('should minBy', () => {
        const array = ['aa', 'a', 'aaaa', 'aaa',];
        const fn = ARRAY.minBy<string>((p) => p.length);
        expect(fn(array)).to.eql('a');
      });
    });

    describe('maxBy', () => {
      it('should maxBy', () => {
        const array = ['aa', 'a', 'aaaa', 'aaa',];
        const fn = ARRAY.maxBy<string>((p) => p.length);
        expect(fn(array)).to.eql('aaaa');
      });
    });

    describe('sumBy', () => {
      it('should sumBy', () => {
        const array = ['aa', 'a', 'aaaa', 'aaa',];
        const fn = ARRAY.sumBy<string>((p) => p.length);
        expect(fn(array)).to.eql(10);
      });
    });
    describe('sum', () => {
      it('should sum', () => {
        const array = [1, 2, 3, 4,];
        const fn = ARRAY.sum;
        expect(fn(array)).to.eql(10);
      });
    });
    describe('averageBy', () => {
      it('should averageBy', () => {
        const array = ['aa', 'a', 'aaaa', 'aaa',];
        const fn = ARRAY.averageBy<string>((p) => p.length);
        expect(fn(array)).to.approximately(2.5, 0.000001);
      });
    });
    describe('average', () => {
      it('should average', () => {
        const array = [1, 2, 3, 4,];
        const fn = ARRAY.average;
        expect(fn(array)).to.approximately(2.5, 0.000001);
      });
    });
    describe('sum', () => {
      it('should sum', () => {
        const array = [1, 2, 3, 4,];
        const fn = ARRAY.sum;
        expect(fn(array)).to.eql(10);
      });
    });

    describe('copy', () => {
      it('should copy', () => {
        const array = [1, 2, 3, 4,];
        const fn = ARRAY.copy;
        const cpy = fn(array);
        expect(cpy).to.eql([1, 2, 3, 4,]);
        array[0] = 0;
        expect(array).to.eql([0, 2, 3, 4,]);
        expect(cpy).to.eql([1, 2, 3, 4,]);
      });
    });

    describe('scanBack', () => {
      it('should scan', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.scanBack<number, number>((p, c) => p + c);
        expect(fn(array)(0)).to.eql([10, 9, 7, 4, 0]);
      });
    });

    describe('foldBack', () => {
      it('should foldBack', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.foldBack<number, string>((p, c) => p + c)('');
        expect(fn(array)).to.eql('4321');
      });
    });

    describe('splitAt', () => {
      it('should splitAt', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.splitAt<number>(2);
        expect(fn(array)).to.eql([[1, 2], [3, 4]]);
        expect(fn([])).to.eql([[], []]);
        expect(fn([1])).to.eql([[1], []]);
        expect(fn([1, 2])).to.eql([[1, 2], []]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('last', () => {
      it('should last', () => {
        const fn = ARRAY.last;
        expect(fn([1, 2, 3, 4])).to.eql(4);
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('pairwise', () => {
      it('should pairwise', () => {
        const fn = ARRAY.pairwise;
        expect(fn([1, 2, 3, 4])).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortBy', () => {
      it('should sortBy', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = ARRAY.sortBy<string>(e => e.length);
        expect(fn(array)).to.eql(['foo', 'hello', 'world']);
        expect(array).to.eql(['hello', 'foo', 'world']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortInPlaceBy', () => {
      it('should sortInPlaceBy', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = ARRAY.sortInPlaceBy<string>(e => e.length);
        expect(fn(array)).to.eql(['foo', 'hello', 'world']);
        expect(array).to.eql(['foo', 'hello', 'world']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sort', () => {
      it('should sort', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = ARRAY.sort;
        expect(fn(array)).to.eql(['foo', 'hello', 'world']);
        expect(array).to.eql(['hello', 'foo', 'world']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortInPlace', () => {
      it('should sortInPlace', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = ARRAY.sortInPlace;
        expect(fn(array)).to.eql(['foo', 'hello', 'world']);
        expect(array).to.eql(['foo', 'hello', 'world']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortWith', () => {
      it('should sortWith', () => {
        const array = ['hello', 'foo', 'fnxt'];
        const fn = ARRAY.sortWith<string>((a, b) => a.length - b.length);
        expect(fn(array)).to.eql(['foo', 'fnxt', 'hello']);
        expect(array).to.eql(['hello', 'foo', 'fnxt']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortInPlaceWith', () => {
      it('should sortInPlaceWith', () => {
        const array = ['hello', 'foo', 'fnxt'];
        const fn = ARRAY.sortInPlaceWith<string>((a, b) => a.length - b.length);
        expect(fn(array)).to.eql(['foo', 'fnxt', 'hello']);
        expect(array).to.eql(['foo', 'fnxt', 'hello']);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    // describe('sortByDescending', () => {
    //   it('should sortByDescending', () => {
    //     const array = ['hello', 'foo', 'world'];
    //     const fn = sortByDescending<string>(e => e.length);
    //     expect(fn(array)).to.eql(['world', 'hello', 'foo']);
    //     expect(array).to.eql(['hello', 'foo', 'world']);
    //     expect(fn([])).to.eql([]);
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     expect(() => fn(null)).to.throw();
    //   });
    // });
    describe('isEmpty', () => {
      it('should isEmpty', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.isEmpty;
        expect(fn(array)).to.eql(false);
        expect(fn([])).to.eql(true);
      });
    });
    describe('skip', () => {
      it('should skip', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.skip(2);
        expect(fn(array)).to.eql([3, 4]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('windowed', () => {
      it('should windowed', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.windowed(2);
        expect(fn(array)).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(fn([1, 2])).to.eql([[1, 2]]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('skipWhile', () => {
      it('should skipWhile', () => {
        const array = [1, 2, 3, 4, 1];
        const fn = ARRAY.skipWhile<number>(x => x < 3);
        expect(fn(array)).to.eql([3, 4, 1]);
        expect(fn([3, 4])).to.eql([3, 4]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('takeWhile', () => {
      it('should takeWhile', () => {
        const array = [1, 2, 3, 4, 1];
        const fn = ARRAY.takeWhile<number>(x => x < 3);
        expect(fn(array)).to.eql([1, 2]);
        expect(fn([3, 4])).to.eql([]);
        expect(fn([1])).to.eql([1]);
        expect(fn([])).to.eql([]);
      });
      it('should takeWhile string', () => {
        const array: string[] = ['1', '2a', '3aa', '4aaa', '1'];
        const fn = ARRAY.takeWhile<string>(x => x.length < 3);
        expect(fn(array)).to.eql(['1', '2a']);
        expect(fn(['3aa', '4aaa'])).to.eql([]);
        expect(fn(['1'])).to.eql(['1']);
        expect(fn([])).to.eql([]);
      });
      it('should takeWhileInclusive string', () => {
        const array: string[] = ['1', '2a', '3aa', '4aaa', '1'];
        const fn = ARRAY.takeWhileInclusive<string>(x => x.length < 3);
        expect(fn(array)).to.eql(['1', '2a', '3aa']);
        expect(fn(['3aa', '4aaa'])).to.eql(['3aa']);
        expect(fn(['1'])).to.eql(['1']);
        expect(fn([])).to.eql([]);
      });
    });
    describe('take', () => {
      it('should take', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.take(2);
        expect(fn(array)).to.eql([1, 2]);
        expect(() => fn([1])).to.throw();
        expect(() => fn([])).to.throw();
      });
    });
    describe('take', () => {
      it('should take', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.truncate(2);
        expect(fn(array)).to.eql([1, 2]);
        expect(fn([1])).to.eql([1]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('transpose', () => {
      it('should transpose 1', () => {
        const array = [[1, 2, 3], [2, 3, 4]];
        const fn = ARRAY.transpose;
        expect(fn(array)).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(array).to.eql([[1, 2, 3], [2, 3, 4]]);
        expect(fn(fn(array))).to.eql([[1, 2, 3], [2, 3, 4]]);
      });

      it('should transpose 2', () => {
        const array = [[1, 2], [2, 3], [3, 4]];
        const fn = ARRAY.transpose;
        expect(fn(array)).to.eql([[1, 2, 3], [2, 3, 4]]);
        expect(array).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(fn(fn(array))).to.eql([[1, 2], [2, 3], [3, 4]]);
      });
      it('should transpose 3', () => {
        const array = [[1, 2], [3, 4]];
        const fn = ARRAY.transpose;
        expect(fn(array)).to.eql([[1, 3], [2, 4]]);
        expect(array).to.eql([[1, 2], [3, 4]]);
        expect(fn(fn(array))).to.eql([[1, 2], [3, 4]]);
      });
      it('should transpose 3', () => {
        const array = [[1, 2]];
        const fn = ARRAY.transpose;
        expect(fn(array)).to.eql([[1], [2]]);
        expect(fn(fn(array))).to.eql([[1, 2]]);
        expect(array).to.eql([[1, 2]]);
      });
      it('should not transpose', () => {
        const array = [[1, 2], [3]];
        const fn = ARRAY.transpose;
        expect(() => fn([[]])).to.to.throw();
        expect(() => fn(array)).to.throw();
        expect(() => fn([])).to.throw();
        expect(() => fn([1] as unknown as number[][])).to.throw();
        expect(array).to.eql([[1, 2], [3]]);
      });
    });

    describe('groupBy', () => {
      it('should groupBy', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.groupBy<number>(x => x % 3);
        expect(fn(array)).to.eql([[3], [1, 4], [2],]);
      });
      it('should groupBy', () => {
        const array: number[] = [];
        const fn = ARRAY.groupBy<number>(x => x % 3);
        expect(fn(array)).to.eql([]);
      });
    });
    describe('iter', () => {
      it('should iter', () => {
        let count = 0;
        const fn = ARRAY.iter(() => count++);
        expect(count).to.eql(0);
        expect(fn([0, 0, 0])).to.eql([0, 0, 0]);
        expect(count).to.eql(3);
      });
      it('should groupBy', () => {
        const array: number[] = [];
        const fn = ARRAY.groupBy<number>(x => x % 3);
        expect(fn(array)).to.eql([]);
      });
    });
    describe('findIndex', () => {
      it('should findIndex', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.findIndex<number>(x => x === 3);
        expect(fn(array)).to.eql(2);
      });
      it('should not findIndex', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.findIndex<number>(x => x === 5);
        expect(fn(array)).to.eql(-1);
      });
      it('should fail findIndex', () => {
        const fn = ARRAY.findIndex<number>(x => x === 5);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });
    describe('chunkBySize', () => {
      it('should chunkBySize 1', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.chunkBySize<number>(3);
        expect(fn(array)).to.eql([[1, 2, 3], [4]]);
      });
      it('should chunkBySize 2', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.chunkBySize<number>(2);
        expect(fn(array)).to.eql([[1, 2], [3, 4]]);
      });
      it('should chunkBySize 3', () => {
        const array: number[] = [];
        const fn = ARRAY.chunkBySize<number>(2);
        expect(fn(array)).to.eql([]);
      });
      it('should chunkBySize 4', () => {
        const array = [1];
        const fn = ARRAY.chunkBySize<number>(2);
        expect(fn(array)).to.eql([[1]]);
      });
      it('should not chunkBySize', () => {

        const fn = ARRAY.chunkBySize<number>(2);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('zip', () => {
      it('should zip', () => {
        const fn = ARRAY.zip([1, 2, 3]);
        expect(fn([4, 5, 6])).to.eql([
          [1, 4],
          [2, 5],
          [3, 6],
        ]);
      });

      it('should zip empty', () => {
        const fn = ARRAY.zip([]);
        expect(fn([])).to.eql([]);
      });
      it('should not zip', () => {
        const fn = ARRAY.zip([1]);
        expect(() => fn([])).to.throw();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('choose', () => {
      it('should choose', () => {
        const array = [1, 2, 3, 4];
        const fn = ARRAY.choose<number, string>((x) => x >= 3 ? Some(`${x + 1}`) : None);
        expect(fn(array)).to.eql(['4', '5']);
      });
      it('should choose empty', () => {
        const array: number[] = [];
        const fn = ARRAY.choose<number, string>((x) =>
          x >= 3 ? Some(`${x + 1}`) : None
        );
        expect(fn(array)).to.eql([]);
      });
      it('should not choose', () => {
        const fn = ARRAY.choose<number, string>((x) =>
          x >= 3 ? Some(`${x + 1}`) : None
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('findBack', () => {
      it('should findBack', () => {
        const fn = ARRAY.findBack<string>((x: string) => x.length === 5);
        expect(fn(['hello', 'world', 'foo'])).to.eql('world');
        expect(fn([])).to.be.undefined;
      });
      it('should not findBack', () => {
        const fn = ARRAY.findBack<string>((x: string) => x.length === 5);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('find', () => {
      it('should find', () => {
        const array: number[] = [1, 2, 3, 4];
        const fn = ARRAY.find<number>((x) => x > 3);
        expect(fn(array)).to.eql(4);
      });
      it('should not find', () => {
        const array: number[] = [1, 2, 3, 4];
        const fn = ARRAY.find<number>((x) => x > 4);
        expect(fn(array)).to.be.undefined;
        expect(fn([])).to.be.undefined;
      });
      it('should fail find', () => {
        const fn = ARRAY.find<number>((x) => x > 4);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('exists', () => {
      it('should exists', () => {
        const array: number[] = [1, 2, 3, 4];
        const fn = ARRAY.exists<number>((x: number) => x > 3);
        expect(fn(array)).to.eql(true);
      });
      it('should not exists', () => {
        const array: number[] = [1, 2, 3, 4];
        const fn = ARRAY.exists<number>((x: number) => x > 4);
        expect(fn(array)).to.eql(false);
        expect(fn([])).to.eql(false);
      });
      it('should fail exists', () => {
        const fn = ARRAY.exists<number>((x: number) => x > 4);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => fn(null)).to.throw();
      });
    });

    describe('replicate', () => {
      it('should replicate', () => {
        const fn = ARRAY.replicate(3);
        expect(fn([1, 2])).to.eql([[1, 2], [1, 2], [1, 2]]);
      });
      it('should replicate val', () => {
        const fn = ARRAY.replicate(3);
        expect(fn('a')).to.eql(['a', 'a', 'a']);
      });
      it('should replicate empty', () => {
        const fn = ARRAY.replicate(3);
        expect(fn([])).to.eql([[], [], [],]);
      });
    });
    describe('rev', () => {
      it('should rev', () => {
        const array: number[] = [1, 2];
        const fn = ARRAY.rev;
        expect(fn(array)).to.eql([2, 1]);
        expect(array).to.eql([1, 2]);
      });

    });

    describe('allCombinations', () => {
      it('should allCombinations', () => {

        const fn = ARRAY.allCombinations;
        expect(fn([1, 2], ['a', 'b'], [4, 5])).to.eql([
          [1, 'a', 4], [1, 'a', 5], [1, 'b', 4], [1, 'b', 5],
          [2, 'a', 4], [2, 'a', 5], [2, 'b', 4], [2, 'b', 5],
        ]);
      });

    });


    describe('-- try', () => {

      describe('tryFind', () => {
        it('should tryFind', () => {
          const array: number[] = [1, 2, 3, 4];
          const fn = ARRAY.tryFind<number>((x: number) => x >= 3);
          expect(fn(array)).to.eql(Some(3));
        });

        it('should not tryFind', () => {
          const array: number[] = [1, 2, 3, 4];
          const fn = ARRAY.tryFind<number>((x: number) => x > 4);
          expect(fn(array)).to.eql(None);
          expect(fn([])).to.eql(None);
        });

        it('should fail tryFind', () => {
          const fn = ARRAY.tryFind<number>((x) => x > 4);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          expect(() => fn(null)).to.throw();
        });
      });


      describe('tryHead', () => {
        it('should tryHead', () => {
          const array: number[] = [1, 2, 3, 4];
          const fn = ARRAY.tryHead;
          expect(fn(array)).to.eql(Some(1));
          expect(fn([])).to.eql(None);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          expect(() => fn(null)).to.throw();
        });
      });

      describe('tryLast', () => {
        it('should tryLast', () => {
          const array: number[] = [1, 2, 3, 4];
          const fn = ARRAY.tryLast;
          expect(fn(array)).to.eql(Some(4));
          expect(fn([])).to.eql(None);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          expect(() => fn(null)).to.throw();
        });
      });
    });
  });

  describe('generator', () => {
    describe('range', () => {
      it('should range up', () => {
        expect(ARRAY.range(1, 5)).to.eql([1, 2, 3, 4]);
      });

      it('should range down', () => {

        expect(ARRAY.range(4, 0, -1)).to.eql([4, 3, 2, 1]);

      });

      it('should range up step', () => {
        expect(ARRAY.range(1, 11, 2)).to.eql([1, 3, 5, 7, 9]);

      });

      it('should range down step', () => {
        expect(ARRAY.range(10, 0, -2)).to.eql([10, 8, 6, 4, 2,]);

      });

      it('should range empty', () => {
        expect(ARRAY.range(10, 10, 0.0001)).to.eql([]);

      });

      it('should range one', () => {
        expect(ARRAY.range(9, 10, 100)).to.eql([9]);

      });

      it('should throw range ', () => {
        expect(() => ARRAY.range(9, 10, 0)).to.throws();
      });

      it('should range small step', () => {


        const l = ARRAY.zip<number>(ARRAY.range(0, 1, .2))<number>([0, .2, .4, .6, .8]);
        expect(l.length).to.eql(5);
        l.forEach(([a, b]) => expect(a).to.approximately(b, 1e-8));


      });
    });
  });
});

