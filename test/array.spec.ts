import {expect} from 'chai';
import 'mocha';
import {None, Some} from '../src/option';
import {
  allPairs,
  append,
  choose,
  chunkBySize,
  collect,
  concat,
  contains,
  distinctBy,
  filter,
  find,
  findIndex,
  flatten,
  fold,
  foldBack,
  groupBy,
  head,
  isEmpty,
  last,
  length,
  map,
  pairwise,
  partition,
  reduce,
  reduceBack,
  skip,
  skipWhile,
  sortBy,
  sortByDescending,
  splitAt,
  tail,
  take,
  takeWhile,
  tryFind,
  tryHead,
  tryLast,
  where,
  windowed,
  zip
} from '../src/array';

describe('array', () => {
  describe('operator', () => {
    describe('map', () => {
      it('should map', () => {
        const array = [1, 2, 3, 4];
        const fn = map((x: number) => x + 1);
        expect(fn(array)).to.eql([2, 3, 4, 5]);
      });

      it('should map empty', () => {
        const array = [];
        const fn = map((x: number) => x + 1);
        expect(fn(array)).to.eql([]);
      });
    });

    describe('reduce', () => {
      it('should reduce', () => {
        const array = ['1', '2', '3', '4'];
        const fn = reduce<string>((a, b) => a + b);
        expect(fn(array)).to.eql('1234');
      });

      it('should not reduce', () => {
        const fn = reduce<number>((a, b) => a + b);
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });
    });
    describe('reduceBack', () => {
      it('should reduceBack', () => {
        const array = ['1', '2', '3', '4'];
        const fn = reduceBack<string>((a, b) => a + b);
        expect(fn(array)).to.eql('4321');
      });

      it('should not reduceBack', () => {
        const fn = reduceBack<number>((a, b) => a + b);
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });
    });
    describe('collect', () => {
      it('should collect', () => {
        const array = ['hello', 'world'];
        const fn = collect((e: string) => e.split(''));

        expect(fn(array)).to.eql([
          'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd',
        ]);
      });
    });

    describe('append', () => {
      it('should append', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const fn = append(array1);

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
        const fn = concat;

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
        const fn = allPairs(array1);

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
        const fn = flatten;
        expect(fn([[1], [2, 3], [4]])).to.eql([1, 2, 3, 4]);
        expect(fn([])).to.eql([]);
        expect(fn([1] as any)).to.eql([1]);
      });

      it('should not flatten', () => {
        const fn = flatten;

        expect(() => fn(null)).to.throw();
      });
    });

    describe('filter', () => {
      it('should filter 1', () => {
        const array = [1, 2, 3, 4];
        const fn = filter((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([1, 3]);
      });

      it('should filter 2', () => {
        const array = [];
        const fn = filter((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([]);
      });
    });
    describe('where', () => {
      it('should where 1', () => {
        const array = [1, 2, 3, 4];
        const fn = where((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([1, 3]);
      });

      it('should where 2', () => {
        const array = [];
        const fn = where((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([]);
      });
    });

    describe('partition', () => {
      it('should partition 1', () => {
        const array = [1, 2, 3, 4];
        const fn = partition((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([[1, 3], [2, 4]]);
      });

      it('should partition 2', () => {
        const array = [];
        const fn = partition((x: number) => x % 2 != 0);
        expect(fn(array)).to.eql([[], []]);
      });

      it('should partition 3', () => {
        const fn = partition((x: number) => x % 2 != 0);
        expect(fn([1, 3])).to.eql([[1, 3], []]);
        expect(fn([2, 4])).to.eql([[], [2, 4]]);
      });
      it('should not partition', () => {
        const fn = partition((x: number) => x % 2 != 0);
        expect(() => fn(null)).to.throw();
      });

    });

    describe('head and tail', () => {
      it('should head', () => {
        const array = [1, 2, 3, 4];
        const fn = head;
        expect(fn(array)).to.eql(1);
      });
      it('should not head', () => {
        const fn = head;
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });

      it('should tail', () => {
        const array = [1, 2, 3, 4];
        const fn = tail;
        expect(fn(array)).to.eql([2, 3, 4]);
      });

      it('should empty tail', () => {
        const array = [1];
        const fn = tail;
        expect(fn(array)).to.eql([]);
      });
      it('should not tail', () => {
        const fn = tail;
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });
    });

    describe('length', () => {
      it('should length', () => {
        const array = [1, 2, 3, 4];
        const fn = length;
        expect(fn(array)).to.eql(4);
      });
    });

    describe('distinctBy', () => {
      it('should distinctBy', () => {
        const fn = distinctBy<string>(x => x.length);
        expect(fn(['hello', 'world', 'foo'])).to.eql(['foo', 'hello']);
        expect(fn([])).to.eql([]);
      });
      it('should not distinctBy', () => {
        const fn = distinctBy<string>(x => x.length);
        expect(() => fn(null)).to.throw();
      });
    });

    describe('contains', () => {
      it('should contains 1', () => {
        const fn = contains<string>('foo');
        expect(fn(['hello', 'world', 'foo'])).to.eql(true);
        expect(fn(['hello', 'world'])).to.eql(false);
        expect(fn([])).to.eql(false);
      });

      it('should contains 2', () => {
        // !be careful when dealing with non-primitives!
        const element = {foo: 42};
        const fn1 = contains<{ [k: string]: number }>(element);
        const fn2 = contains<{ [k: string]: number }>({foo: 42});
        expect(fn1([element])).to.eql(true);
        expect(fn2([element])).to.eql(false);
      });

      it('should not distinctBy', () => {
        const fn = contains(1);
        expect(() => fn(null)).to.throw();
      });
    });

    describe('fold', () => {
      it('should fold', () => {
        const array = [1, 2, 3, 4];
        const fn = fold<number, string>((p, c) => p + c)('');
        expect(fn(array)).to.eql('1234');
      });
    });

    describe('foldBack', () => {
      it('should foldBack', () => {
        const array = [1, 2, 3, 4];
        const fn = foldBack<number, string>((p, c) => p + c)('');
        expect(fn(array)).to.eql('4321');
      });
    });
    describe('splitAt', () => {
      it('should splitAt', () => {
        const array = [1, 2, 3, 4];
        const fn = splitAt<number>(2);
        expect(fn(array)).to.eql([[1, 2], [3, 4]]);
        expect(fn([])).to.eql([[], []]);
        expect(fn([1])).to.eql([[1], []]);
        expect(fn([1, 2])).to.eql([[1, 2], []]);
        expect(() => fn(null)).to.throw();
      });
    });
    describe('last', () => {
      it('should last', () => {
        const fn = last;
        expect(fn([1, 2, 3, 4])).to.eql(4);
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });
    });
    describe('pairwise', () => {
      it('should pairwise', () => {
        const fn = pairwise;
        expect(fn([1, 2, 3, 4])).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortBy', () => {
      it('should sortBy', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = sortBy<string>(e => e.length);
        expect(fn(array)).to.eql(['foo', 'hello', 'world']);
        expect(array).to.eql(['hello', 'foo', 'world']);
        expect(fn([])).to.eql([]);
        expect(() => fn(null)).to.throw();
      });
    });
    describe('sortByDescending', () => {
      it('should sortByDescending', () => {
        const array = ['hello', 'foo', 'world'];
        const fn = sortByDescending<string>(e => e.length);
        expect(fn(array)).to.eql(['world', 'hello', 'foo']);
        expect(array).to.eql(['hello', 'foo', 'world']);
        expect(fn([])).to.eql([]);
        expect(() => fn(null)).to.throw();
      });
    });
    describe('isEmpty', () => {
      it('should isEmpty', () => {
        const array = [1, 2, 3, 4];
        const fn = isEmpty;
        expect(fn(array)).to.eql(false);
        expect(fn([])).to.eql(true);
      });
    });
    describe('skip', () => {
      it('should skip', () => {
        const array = [1, 2, 3, 4];
        const fn = skip(2);
        expect(fn(array)).to.eql([3, 4]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('windowed', () => {
      it('should windowed', () => {
        const array = [1, 2, 3, 4];
        const fn = windowed(2);
        expect(fn(array)).to.eql([[1, 2], [2, 3], [3, 4]]);
        expect(fn([1, 2])).to.eql([[1, 2]]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
        expect(() => fn(null)).to.throw();
      });
    });
    describe('skipWhile', () => {
      it('should skipWhile', () => {
        const array = [1, 2, 3, 4, 1];
        const fn = skipWhile<number>(x => x < 3);
        expect(fn(array)).to.eql([3, 4, 1]);
        expect(fn([3, 4])).to.eql([3, 4]);
        expect(fn([1])).to.eql([]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('takeWhile', () => {
      it('should takeWhile', () => {
        const array = [1, 2, 3, 4, 1];
        const fn = takeWhile<number>(x => x < 3);
        expect(fn(array)).to.eql([1, 2]);
        expect(fn([3, 4])).to.eql([]);
        expect(fn([1])).to.eql([1]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('take', () => {
      it('should take', () => {
        const array = [1, 2, 3, 4];
        const fn = take(2);
        expect(fn(array)).to.eql([1, 2]);
        expect(fn([1])).to.eql([1]);
        expect(fn([])).to.eql([]);
      });
    });
    describe('groupBy', () => {
      it('should groupBy', () => {
        const array = [1, 2, 3, 4];
        const fn = groupBy<number>(x => x % 3);
        expect(fn(array)).to.eql([[3], [1, 4], [2],]);
      });
      it('should groupBy', () => {
        const array = [];
        const fn = groupBy<number>(x => x % 3);
        expect(fn(array)).to.eql([]);
      });
    });
    describe('findIndex', () => {
      it('should findIndex', () => {
        const array = [1, 2, 3, 4];
        const fn = findIndex<number>(x => x === 3);
        expect(fn(array)).to.eql(2);
      });
      it('should not findIndex', () => {
        const array = [1, 2, 3, 4];
        const fn = findIndex<number>(x => x === 5);
        expect(fn(array)).to.eql(-1);
      });
      it('should fail findIndex', () => {
        const array = null;
        const fn = findIndex<number>(x => x === 5);
        expect(() => fn(array)).to.throw();
      });
    });
    describe('chunkBySize', () => {
      it('should chunkBySize 1', () => {
        const array = [1, 2, 3, 4];
        const fn = chunkBySize(3);
        expect(fn(array)).to.eql([[1, 2, 3], [4]]);
      });
      it('should chunkBySize 2', () => {
        const array = [1, 2, 3, 4];
        const fn = chunkBySize(2);
        expect(fn(array)).to.eql([[1, 2], [3, 4]]);
      });
      it('should chunkBySize 3', () => {
        const array = [];
        const fn = chunkBySize(2);
        expect(fn(array)).to.eql([]);
      });
      it('should chunkBySize 4', () => {
        const array = [1];
        const fn = chunkBySize(2);
        expect(fn(array)).to.eql([[1]]);
      });
      it('should not chunkBySize', () => {
        const array = null;
        const fn = chunkBySize(2);
        expect(() => fn(array)).to.throw();
      });
    });

    describe('zip', () => {
      it('should zip', () => {
        const fn = zip([1, 2, 3]);
        expect(fn([4, 5, 6])).to.eql([
          [1, 4],
          [2, 5],
          [3, 6],
        ]);
      });

      it('should zip empty', () => {
        const fn = zip([]);
        expect(fn([])).to.eql([]);
      });
      it('should not zip', () => {
        const fn = zip([1]);
        expect(() => fn([])).to.throw();
        expect(() => fn(null)).to.throw();
      });
    });

    describe('choose', () => {
      it('should choose', () => {
        const array = [1, 2, 3, 4];
        const fn = choose<number, string>((x) =>
          x >= 3 ? Some(`${x + 1}`) : None
        );
        expect(fn(array)).to.eql(['4', '5']);
      });
      it('should choose empty', () => {
        const array = [];
        const fn = choose<number, string>((x) =>
          x >= 3 ? Some(`${x + 1}`) : None
        );
        expect(fn(array)).to.eql([]);
      });
      it('should not choose', () => {
        const fn = choose<number, string>((x) =>
          x >= 3 ? Some(`${x + 1}`) : None
        );
        expect(() => fn(null)).to.throw();
      });
    });

    describe('find', () => {
      it('should find', () => {
        const array = [1, 2, 3, 4];
        const fn = find<number>((x) => x > 3);
        expect(fn(array)).to.eql(4);
      });
      it('should not find', () => {
        const array = [1, 2, 3, 4];
        const fn = find<number>((x) => x > 4);
        expect(fn(array)).to.undefined;
        expect(fn([])).to.undefined;
      });
      it('should fail find', () => {
        const fn = find<number>((x) => x > 4);
        expect(() => fn(null)).to.throw();
      });
    });


    describe('-- try', () => {

      describe('tryFind', () => {
        it('should tryFind', () => {
          const array = [1, 2, 3, 4];
          const fn = tryFind<number>((x) => x >= 3);
          expect(fn(array)).to.eql(Some(3));
        });

        it('should not tryFind', () => {
          const array = [1, 2, 3, 4];
          const fn = tryFind<number>((x) => x > 4);
          expect(fn(array)).to.eql(None);
          expect(fn([])).to.eql(None);
        });

        it('should fail tryFind', () => {
          const fn = tryFind<number>((x) => x > 4);
          expect(() => fn(null)).to.throw();
        });
      });


      describe('tryHead', () => {
        it('should tryHead', () => {
          const array = [1, 2, 3, 4];
          const fn = tryHead;
          expect(fn(array)).to.eql(Some(1));
          expect(fn([])).to.eql(None);
          expect(() => fn(null)).to.throw();
        });
      });

      describe('tryLast', () => {
        it('should tryLast', () => {
          const array = [1, 2, 3, 4];
          const fn = tryLast;
          expect(fn(array)).to.eql(Some(4));
          expect(fn([])).to.eql(None);
          expect(() => fn(null)).to.throw();
        });
      });
    });

  });
});
