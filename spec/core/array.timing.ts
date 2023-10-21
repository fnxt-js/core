import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import 'mocha';

import * as ARRAY from '../../src/array';
import {KeyProjection, Mutation, Predicate, PropertyProjection, Tuple, UnaryFunction} from '../../src/fnxt-types';
import {Chooser, isSome, None, Some} from '../../src/option';

import {performance} from 'perf_hooks';
import * as process from 'process';
import wilcoxon = require('@stdlib/stats-wilcoxon');

const {expect} = chai;
chai.use(sinonChai);

/*********************************************************************/

function shuffle<E>(arr: E[]) {
  const a = arr.slice();
  for (let i = a.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

const measure = (fn: (() => void)) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
};

function experiment<A, B>(reps: number, partition: (array: A[]) => B, data: A[]) {
  const nanos: number[] = [];
  for (let i = 0; i < reps; i++) {
    const a = measure(() => {
      partition(data);
    });
    nanos.push(a);
  }
  return nanos;
}

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;

const print = (!process.env.PRINT_DEBUG)
    ? () => null
    : (data: unknown) => console.log(data);


function printTimings(a: number[], b: number[]) {
  print('x=' + JSON.stringify(a));
  print('y=' + JSON.stringify(b));
}

function run<T, R>(fnxt: (array: T[]) => R, alt: (array: T[]) => R, data: T[], replications = 1000) {

  const alpha = .05;
  expect(fnxt(data)).to.eql(alt(data));

  const x = experiment(100, fnxt, data); //warmup
  const a = experiment(replications, fnxt, data);

  const y = experiment(100, alt, data); //warmup
  const b = experiment(replications, alt, data);

  printTimings(a, b);

  expect(x.length).to.eql(y.length);
  const result = wilcoxon(a, b, {alternative: 'less'});
  expect(result.pValue).to.lessThan(alpha);
}

/*********************************************************************/

describe('performance test', function () {

  const length = 100000;

  it('partition', () => {
    const partition = <T>(predicate: Predicate<T>) =>
        (array: T[]): Tuple<T[], T[]> =>
            [array.filter(predicate), array.filter(e => !predicate(e))];

    const data = shuffle(ARRAY.range(0, length));
    const predicate: Predicate<number> = (e) => length / 2 <= e;
    const fnxt = ARRAY.partition(predicate);
    const alternative = partition(predicate);
    run(fnxt, alternative, data);
  }).timeout(oneMinute);


  it('splitAt', () => {
    const splitAt = <T>(index: number) => (array: T[]): Tuple<T[], T[]> => {
      if (array.length <= index) {
        return [array, []];
      }
      const a = [];
      const b = [];
      for (let i = 0; i < index; i++) {
        a.push(array[i]);
      }
      for (let i = index; i < array.length; i++) {
        b.push(array[i]);
      }
      return [a, b];

    };


    const data = ARRAY.range(0, length);
    const index = Math.round(length / 2);
    const fnxt = ARRAY.splitAt(index);
    const alternative = splitAt(index);
    run(fnxt, alternative, data);
  }).timeout(oneMinute);

  describe('remove', () => {
    it('remove (1)', () => {
      const remove = (index: number) => <T>(array: T[]): T[] =>
          array.filter((v, i) => i !== index);

      const data = ARRAY.range(0, length);

      const index = Math.round(length / 2);
      const fnxt = ARRAY.remove(index);
      const alternative = remove(index);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);
  });
  describe('collect', () => {

    it('collect (1)', () => {

      const collect = <E, F>(fn: UnaryFunction<E, Iterable<F>>) => (array: E[]): F[] =>
          array.reduce((p, c) => {
            const values = fn(c);
            p.push(...values);
            return p;
          }, [] as F[]);


      const data = ARRAY.range(0, length / 10);

      const mapping = (e: number) => ARRAY.range(0, e % 10 + 10);

      const fnxt = ARRAY.collect(mapping);
      const alternative = collect(mapping);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);

    it('collect (2)', () => {

      const collect = <E, F>(fn: UnaryFunction<E, Iterable<F>>) => (array: E[]): F[] => {
        const res = [];
        for (let i = 0; i < array.length; i++) {
          const elements = fn(array[i]);
          for (const element of elements) {
            res.push(element);
          }
        }
        return res;
      };


      const data = ARRAY.range(0, length / 10);

      const mapping = (e: number) => ARRAY.range(0, e % 10 + 10);

      const fnxt = ARRAY.collect(mapping);
      const alternative = collect(mapping);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);
  });

  describe('updateAt', () => {
    it('updateAt (1)', () => {
      const updateAt = (index: number) => <T>(value: T) => (array: T[]): T[] =>
          array.map((v, i) => i === index ? value : v);

      const data = ARRAY.range(0, length);

      const index = Math.round(length / 2);
      const fnxt = ARRAY.updateAt(index)(-1);
      const alternative = updateAt(index)(-1);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);

    it('updateAt (2)', () => {
      const updateAt = (index: number) => <T>(value: T) => (array: T[]): T[] =>
          array.slice(0, index).concat([value], array.slice(index + 1));

      const data = ARRAY.range(0, length);

      const index = Math.round(length / 2);
      const fnxt = ARRAY.updateAt(index)(-1);
      const alternative = updateAt(index)(-1);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);
  });
  describe('stride', () => {
    it('stride', () => {
      const stride = <T>(step: number) => <T>(array: T[]): T[] =>
        array.filter((_, i) => i % step == 0);

      const data = ARRAY.range(0, length);

      const step = 13;
      const fnxt = ARRAY.stride(step);
      const alternative = stride(step);

      run(fnxt, alternative, data);

    }).timeout(oneMinute);
  });

  it('skipWhile', () => {
    const skipWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
      const result = [];
      let count = 0;
      while (predicate(array[count])) {
        count++;
      }
      for (let i = count; i < array.length; i++) {
        result.push(array[i]);
      }
      return result;
    };

    const data = ARRAY.range(0, length);
    const predicate: Predicate<number> = (e) => length / 2 <= e;
    const fnxt = ARRAY.skipWhile(predicate);
    const alternative = skipWhile(predicate);
    run(fnxt, alternative, data);
  }).timeout(oneMinute);

  it('findBack vs rev', () => {
    const findBack = <T>(fn: Predicate<T>) => (array: T[]): T => {
      return ARRAY.find(fn)(ARRAY.rev(array));
    };

    const data = ARRAY.range(0, length);
    const element = Math.round(length / 2);

    const predicate: Predicate<number> = (e) => e === element;
    const fnxt = ARRAY.findBack(predicate);
    const alternative = findBack(predicate);
    run(fnxt, alternative, data);
  }).timeout(oneMinute);


  it('tail', () => {
    const tail = <T>(array: T[]): T[] => {
      const [, ...rest] = array;
      if (!array.length) {
        throw Error();
      }
      return rest;
    };

    const data = ARRAY.range(0, length);

    run(ARRAY.tail, tail, data);
  }).timeout(oneMinute);


  it('append', () => {
    const append = <E>(a: E[]) => (b: E[]): E[] => [...a, ...b];

    const data0 = ARRAY.range(0, length / 2);
    const data1 = ARRAY.range(0, length / 2);

    run(ARRAY.append(data0), append(data0), data1);
  }).timeout(oneMinute);


  it('countBy', () => {
    const p = (x: number) => x % 1000;


    const countBy = <E>(projection: KeyProjection<E>) => (array: E[]): [string | number, number][] => {
      const map = new Map<number | string, number>();
      for (const e of array) {
        const key = projection(e);
        map.set(key, 1 + (map.get(key) || 0));
      }
      return Array.from(map.entries());

    };
    const data = ARRAY.range(0, length);

    run(ARRAY.countBy(p), countBy(p), data);
  }).timeout(oneMinute);


  it('zip', () => {
    const zip = <T>(a: T[]) => <U>(b: U[]): Tuple<T, U>[] => {
      if (a.length !== b.length) {
        throw Error('arrays differ in length');
      }
      return ARRAY.range(0, a.length).map((i) => [a[i], b[i]]);
    };
    const data = ARRAY.range(0, length);

    run(ARRAY.zip(data), zip(data), data);
  }).timeout(oneMinute);

  describe('interleave', () => {
    it('interleave', () => {
      const interleave = <E>(arr1: E[]) => (arr2: E[]) => {
        return ARRAY.flatten(ARRAY.zip(arr1)(arr2) as [E, E][] as E[][]);
      };

      const data0 = ARRAY.range(1000, length + 1000).slice(10000);
      const data = ARRAY.range(0, length).slice(10000);

      run(ARRAY.interleave(data0), interleave(data0), data);
    }).timeout(oneMinute);

  });
  it('zip3', () => {
    const zip3 = <T>(a: T[]) => <U>(b: U[]) => <S>(c: S[]): [T, U, S][] => {
      if (a.length !== b.length || c.length !== a.length) {
        throw Error('arrays differ in length');
      }
      return ARRAY.range(0, a.length).map((v, i) => [a[i], b[i], c[i]]);
    };
    const data = ARRAY.range(0, length);

    run(ARRAY.zip3(data)(data), zip3(data)(data), data);
  }).timeout(oneMinute);

  it('rotate', () => {
    const rotate = (offset: number) => <S>(array: S[]): S[] => {
      const [front, back] = ARRAY.splitAt(offset %= array.length)(array);
      return ARRAY.append(back)(front);
    };

    const data = ARRAY.range(0, length);
    const half = Math.round(length / 2);

    run(ARRAY.rotate(half), rotate(half), data);
  }).timeout(oneMinute);

  it('rotate 2', () => {
    const rotate = (offset: number) =>

        <S>(array: S[]): S[] => {

          const index = offset % array.length + (offset < 0 ? array.length : 0);
          const result: S[] = [];
          for (let i = index; i < array.length; i++) {
            result.push(array[i]);
          }

          for (let i = 0; i < index; i++) {
            result.push(array[i]);
          }

          return result;
        };

    const data = ARRAY.range(0, length);
    const half = Math.round(length / 2);

    run(ARRAY.rotate(half), rotate(half), data);
  }).timeout(oneMinute);

  it('uniqueBy', () => {
    const p = (x: number) => x % 1000;

    const uniqueBy = <T>(projection: PropertyProjection<T>) => (array: T[]): T[] => {

      const set = new Set<string | number>();
      const result: T[] = [];

      for (const item of array) {
        const key = projection(item);
        if (!set.has(key)) {
          set.add(key);
          result.push(item);
        }
      }
      return result;
    };


    const data = ARRAY.range(0, length);

    run(ARRAY.uniqueBy(p), uniqueBy(p), data);
  }).timeout(oneMinute);


  it('choose', () => {
    const choose = <E, F>(fn: Chooser<E, F>) => {
      const reduction = <E, F>(fn: Chooser<E, F>) => (p: F[], e: E): F[] => {
        const v = fn(e);
        if (isSome(v)) {
          p.push(v.value);
        }
        return p;
      };

      return (array: Array<E>): Array<F> => array.reduce(reduction(fn), []);
    };

    const threshold = length / 2;
    const mapping: Mutation<number> = (e) => e + 1;
    const predicate: Predicate<number> = (e) => threshold <= e;

    const data = ARRAY.range(0, length);

    const fnxt = ARRAY.choose<number, number>(e => predicate(e) ? Some(mapping(e)) : None);
    const alternative = choose<number, number>(e => predicate(e) ? Some(mapping(e)) : None);

    run(fnxt, alternative, data);

  }).timeout(oneMinute);


})
;

