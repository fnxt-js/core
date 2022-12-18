import {Mutation, Predicate, Tuple} from '../../src/fnxt-types';

import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import 'mocha';

import * as ARRAY from '../../src/array';

import wilcoxon = require('@stdlib/stats-wilcoxon');
import {Chooser, None, OptionType, Some} from '../../src/option';


import {performance} from 'perf_hooks';

const {expect} = chai;
chai.use(sinonChai);

/*********************************************************************/

function shuffle<E>(arr: E[]) {
  const a = arr.slice();
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
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

function printTimings(a: number[], b: number[]) {
  console.log('x=' + JSON.stringify(a));
  console.log('y=' + JSON.stringify(b));
}

function run<T, R>(fnxt: (array: T[]) => R, alt: (array: T[]) => R, data: T[]) {
  const replications = 1000;
  const alpha = .05;
  expect(fnxt(data)).to.eql(alt(data));

  const x = experiment(100, fnxt, data); //warmup
  const a = experiment(replications, fnxt, data);

  const y = experiment(100, alt, data); //warmup
  const b = experiment(replications, alt, data);

  // printTimings(a, b);

  expect(x.length).to.eql(y.length);
  const result = wilcoxon(a, b, {alternative: 'less'});

  expect(result.pValue).to.lessThan(alpha);
}

/*********************************************************************/

describe('performance test', function () {

  const length = 10000;

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


    const data = shuffle(ARRAY.range(0, length));
    const index = Math.round(length / 2);
    const fnxt = ARRAY.splitAt(index);
    const alternative = splitAt(index);
    run(fnxt, alternative, data);
  }).timeout(oneMinute);


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


  it('takeWhile', () => {

    const takeWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
      const result = [];
      for (const element of array) {
        if (!predicate(element)) {
          break;
        }
        result.push(element);
      }
      return result;
    };


    const data = ARRAY.range(0, length);
    const predicate: Predicate<number> = (e) => length / 2 <= e;
    const fnxt = ARRAY.takeWhile(predicate);
    const alternative = takeWhile(predicate);
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


  it('choose', () => {
    const choose = <E, F>(fn: Chooser<E, F>) => {
      const reduction = <E, F>(fn: Chooser<E, F>) => (p: F[], e: E): F[] => {
        const v = fn(e);
        if (v.type === OptionType.Some) {
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


});

