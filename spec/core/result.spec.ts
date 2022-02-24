import {expect} from 'chai';
import 'mocha';
import {bind, bindAsync, Failure, fold, map, mapAsync, mapFailure, ResultType, Success} from 'fnxt/result';

describe('Result', () => {
  describe('Success', () => {
    it('should build Success', () => {
      const result = Success(42);
      expect(result).to.eql(Success(42));
      expect(result.type).to.eql(ResultType.Success);
      expect(result.value).to.eql(42);
    });
  });
  describe('Failure', () => {
    it('should build Failure', () => {
      const result = Failure(42);
      expect(result).to.eql(Failure(42));
      expect(result.type).to.eql(ResultType.Failure);
      expect(result.value).to.eql(42);
    });
  });

  describe('bind', () => {
    it('bind success', () => {
      const result = Success(42);
      const fn = bind((x: number) => Success(x + 1));
      expect(fn(result)).to.eql(Success(43));
    });
    it('bind failure', () => {
      const result = Failure(42);
      const fn = bind((x: number) => Success(x + 1));
      expect(fn(result)).to.eql(Failure(42));
    });
  });
  describe('bindAsync', () => {
    it('bind success', async () => {
      const result = Success(42);
      const fn = bindAsync(async (x: number) => Success(x + 1));
      expect(await fn(result)).to.eql(Success(43));
    });
    it('bind failure', async () => {
      const result = Failure(42);
      const fn = bindAsync(async (x: number) => Success(x + 1));
      expect(await fn(result)).to.eql(Failure(42));
    });
  });
  describe('map', () => {
    it('map success', () => {
      const result = Success(42);
      const fn = map((x: number) => x + 1);
      expect(fn(result)).to.eql(Success(43));
    });
    it('map failure', () => {
      const result = Failure(42);
      const fn = map((x: number) => x + 1);
      expect(fn(result)).to.eql(Failure(42));
    });
  });
  describe('mapAsync', () => {
    it('mapAsync success', async () => {
      const result = Success(42);
      const fn = mapAsync(async (x: number) => x + 1);
      expect(await fn(result)).to.eql(Success(43));
    });
    it('mapAsync failure', async () => {
      const result = Failure(42);
      const fn = mapAsync(async (x: number) => x + 1);
      expect(await fn(result)).to.eql(Failure(42));
    });
  });
  describe('mapFailure', () => {
    it('mapFailure success', () => {
      const result = Success(42);
      const fn = mapFailure((x: number) => x + 1);
      expect(fn(result)).to.eql(Success(42));
    });
    it('mapFailure failure', () => {
      const result = Failure(42);
      const fn = mapFailure((x: number) => x + 1);
      expect(fn(result)).to.eql(Failure(43));
    });
  });

  describe('fold', () => {
    it('fold success', () => {
      const results = [Success(42), Success(44)];
      const fn = fold(
        (a: number, b: number) => a + b, 0,
        (a: number, b: number) => a + b, 0,
      );
      expect(fn(results)).to.eql(Success(86));
    });

    it('fold success list', () => {
      const results = [Success(1), Success(2), Success(3)];
      const fn = fold(
        (a: number[], b: number) => [...a, b], [],
        (a: number[], b: number) => [...a, b], [],
      );
      expect(fn(results)).to.eql(Success([1, 2, 3]));
    });

    it('mapFailure failure', () => {
      const results = [Success(1), Success(2), Failure(0), Failure(42)];
      const fn = fold(
        (a: number[], b: number) => [...a, b], [],
        (a: number[], b: number) => [...a, b], [],
      );
      expect(fn(results)).to.eql(Failure([0, 42]));
    });
  });


});
