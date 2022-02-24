import {expect} from 'chai';
import 'mocha';
import {map, range} from 'fnxt/seq';

describe('sequence', () => {
  describe('generator', () => {
    describe('map', () => {
      it('should map', () => {
        const seq = range(1, 4, 1);
        const plusOne = map((x: number) => x + 1);
        expect([...plusOne(seq)]).to.eql([2, 3, 4]);
      });
    });
    describe('range', () => {
      it('should count up', () => {
        const seq = range(1, 4, 1);
        expect([...seq]).to.eql([1, 2, 3]);
      });
      it('should count up2', () => {
        const seq = range(1, 2, 1);
        expect([...seq]).to.eql([1]);
      });
      it('should count up3', () => {
        const seq = range(1, 1, 1);
        expect([...seq]).to.eql([]);
      });

      it('should count down', () => {
        const seq = range(4, 1, -1);
        expect([...seq]).to.eql([4, 3, 2]);
      });
    });
  });
});
