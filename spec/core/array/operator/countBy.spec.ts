import {expect} from 'chai';
import {countBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';
import {UnaryFunction} from '../../../../src/fnxt-types';


describe('countBy', () => {
  it('should countBy', () => {
    const fn = countBy((x: string) => x.length);
    expect(fn(['hello', 'world', 'foo'])).to.eql([[3, 1], [5, 2],]);
  });
  it('should countBy of empty', () => {
    const fn = countBy((x: string) => x.length);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = countBy((x: string) => x.length);
    checkThrow(fn);
  });

  describe('type inference', () => {
    it('should countBy infer number', () => {
      let fn: UnaryFunction<string[], [number, number][]> = countBy((x: string) => x.length);
      expect(fn(['hello', 'world', 'foo'])).to.eql([[3, 1], [5, 2],]);
    });
    it('should countBy infer string', () => {
      let fn: UnaryFunction<string[], [string, number][]> = countBy((x: string) => `${x.length}`);
      expect(fn(['hello', 'world', 'foo'])).to.eql([['3', 1], ['5', 2],]);
    });
    it('should countBy default type', () => {
      let fn: UnaryFunction<string[], [string | number, number][]> = countBy<string>(x => x.length);
      expect(fn(['hello', 'world', 'foo'])).to.eql([[3, 1], [5, 2],]);
    });
  });
});
