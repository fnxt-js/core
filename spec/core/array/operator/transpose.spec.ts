import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {transpose} from '../../../../src/array';

describe('transpose', () => {

    it('should transpose 3x2', () => {
      const array = [[1, 2, 3], [2, 3, 4]];
      expect(transpose(array)).to.eql([[1, 2], [2, 3], [3, 4]]);
      expect(array).to.eql([[1, 2, 3], [2, 3, 4]]);
    });

    it('be self-inverse', () => {
      const array = [[1, 2], [2, 3], [3, 4]];
      expect(transpose(transpose(array))).to.eql(array);
    });
    it('should transpose 2x3', () => {
      const array = [[1, 2], [2, 3], [3, 4]];
      expect(transpose(array)).to.eql([[1, 2, 3], [2, 3, 4]]);
      expect(array).to.eql([[1, 2], [2, 3], [3, 4]]);
    });


    it('should transpose 1x2', () => {
      const array = [[1, 2]];
      const fn = transpose;
      expect(fn(array)).to.eql([[1], [2]]);
      expect(fn(fn(array))).to.eql([[1, 2]]);
      expect(array).to.eql([[1, 2]]);
    });


  it('should transpose 2x3x1', () => {
    const array = [[[1], [2]], [[2], [3]], [[3], [4]]];
    expect(transpose(array)).to.eql([[[1], [2], [3]], [[2], [3], [4]]]);
    expect(array).to.eql([[[1], [2]], [[2], [3]], [[3], [4]]]);
  });

  it('should throw not 1 dimensional', () => {
    const fn = (a:number[][])=>transpose(a);
    expect(() => fn([1] as unknown as number[][])).to.throw();
  })

  it('should throw if empty', () => {
    const fn = (a:number[][])=>transpose(a);
    expect(() => fn([])).to.throw();
  })

  it('should throw if inner is empty', () => {
    const fn = (a:number[][])=>transpose(a);
    expect(() => fn([[]])).to.throw();
  })

  it('should throw if not rectangular', () => {
    const array = [[1, 2], [3]];
    const fn = (a:number[][])=>transpose(a);
    expect(() => fn(array)).to.throw();
  });

  it('should throw if null or undefined', () => {
    const fn = (a:number[][])=>transpose(a);
    checkThrow(fn);
  });


  });
