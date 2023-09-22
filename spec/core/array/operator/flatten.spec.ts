import {expect} from 'chai';
import {flatten} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe.only('flatten', () => {
    it('should flatten', () => {
        expect(flatten([[1], [2, 3], [4]])).to.eql([1, 2, 3, 4]);
        expect(flatten([])).to.eql([]);
    });

    it('should not flatten', () => {
        expect(() => flatten([1, [2], 3] as unknown as number[][])).to.throw();
    });


    it('should throw if null or undefined', () => {
        const fn = (number: number[][]) => flatten<number>(number);
        checkThrow(fn);
    });
});
