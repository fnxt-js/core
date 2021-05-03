import { expect } from 'chai';
import 'mocha';
import { map } from '../src/result/operator/map';
import { mapFailure } from '../src/result/operator/mapFailure';
import { bind } from '../src/result/operator/bind';
import { Result, Failure, ResultType, Success } from '../src/result/result';

describe('result', () => {
  it('should build Success', () => {
    const result = Success(42);
    expect(result).to.eql(Success(42));
    expect(result.type).to.eql(ResultType.Success);
    expect(result.value).to.eql(42);
  });
  it('should build Failure', () => {
    const result = Failure(42);
    expect(result).to.eql(Failure(42));
    expect(result.type).to.eql(ResultType.Failure);
    expect(result.value).to.eql(42);
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
});
