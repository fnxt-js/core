import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {zip3} from '../../../../src/array';

describe('zip3', () => {


    it('should zip3', () => {
        const fn = zip3([1, 2, 3])([4, 5, 6]);
        expect(fn([7, 8, 9])).to.eql([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ]);
    });

    it('should zip3 empty', () => {
        const fn = zip3([])([]);
        expect(fn([])).to.eql([]);
    });
    it('should not zip3 if not same size', () => {
        expect(() => zip3([1, 2])([2])([4])).to.throw();
        expect(() => zip3([1, 2])([2, 3])([4])).to.throw();
        expect(() => zip3([1, 2])([2])([4, 5])).to.throw();
    });


    it('should throw if null or undefined', () => {
        const fn = zip3([1])([2]);
        checkThrow(fn);
    });
});
