import {expect} from 'chai';
import {allCombinations} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('allCombinations', () => {


  it('should allCombinations', () => {

    const fn = allCombinations;
    expect(fn([1, 2], ['a', 'b'], [4, 5])).to.eql([
      [1, 'a', 4], [1, 'a', 5], [1, 'b', 4], [1, 'b', 5],
      [2, 'a', 4], [2, 'a', 5], [2, 'b', 4], [2, 'b', 5],
    ]);
  });

  it('should allCombinations', () => {

    const fn = allCombinations;
    const expansion = fn(['ace', 'king', 'queen', 'jack'], ['hearts', 'spades', 'diamonds', 'clubs'], ['blue cover', 'red cover']);

    expect(expansion).to.eql([
      ['ace', 'hearts', 'blue cover'],
      ['ace', 'hearts', 'red cover'],
      ['ace', 'spades', 'blue cover'],
      ['ace', 'spades', 'red cover'],
      ['ace', 'diamonds', 'blue cover'],
      ['ace', 'diamonds', 'red cover'],
      ['ace', 'clubs', 'blue cover'],
      ['ace', 'clubs', 'red cover'],
      ['king', 'hearts', 'blue cover'],
      ['king', 'hearts', 'red cover'],
      ['king', 'spades', 'blue cover'],
      ['king', 'spades', 'red cover'],
      ['king', 'diamonds', 'blue cover'],
      ['king', 'diamonds', 'red cover'],
      ['king', 'clubs', 'blue cover'],
      ['king', 'clubs', 'red cover'],
      ['queen', 'hearts', 'blue cover'],
      ['queen', 'hearts', 'red cover'],
      ['queen', 'spades', 'blue cover'],
      ['queen', 'spades', 'red cover'],
      ['queen', 'diamonds', 'blue cover'],
      ['queen', 'diamonds', 'red cover'],
      ['queen', 'clubs', 'blue cover'],
      ['queen', 'clubs', 'red cover'],
      ['jack', 'hearts', 'blue cover'],
      ['jack', 'hearts', 'red cover'],
      ['jack', 'spades', 'blue cover'],
      ['jack', 'spades', 'red cover'],
      ['jack', 'diamonds', 'blue cover'],
      ['jack', 'diamonds', 'red cover'],
      ['jack', 'clubs', 'blue cover'],
      ['jack', 'clubs', 'red cover']
    ]);
  });


  it('should throw if null or undefined', () => {
    const fn = (e: number[][]) => allCombinations(e);
    checkThrow(fn);
  });

});


