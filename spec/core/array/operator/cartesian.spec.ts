import {expect} from 'chai';
import {cartesian} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('cartesian', () => {


  it('should cartesian []', () => {

    const fn = cartesian;
    expect(fn([])).to.eql([]);
  });

  it('should cartesian [2]', () => {

    const fn = cartesian;
    expect(fn([1, 2])).to.eql([
      [1],
      [2],
    ]);
  });
  it('should cartesian [2,3]', () => {

    const fn = cartesian;
    expect(fn([1, 2], ['a', 'b', 'c'])).to.eql([
      [
        [1, 'a'],
        [1, 'b'],
        [1, 'c'],
      ],
      [
        [2, 'a'],
        [2, 'b'],
        [2, 'c'],
      ],
    ]);
  });

  it('should cartesian [3,4,2]', () => {

    const fn = cartesian;
    type Cover = 'blue cover' | 'red cover'
    type Color = 'hearts' | 'spades' | 'diamonds' | 'clubs'
    type Value = 'ace' | 'king' | 'queen'
    const covers: Cover[] = ['blue cover', 'red cover'];
    const expansion = fn(['ace', 'king', 'queen'] as Value[], ['hearts', 'spades', 'diamonds', 'clubs'] as Color[], covers);
    const expected: typeof expansion = [
      [
        [
          ['ace', 'hearts', 'blue cover'],
          ['ace', 'hearts', 'red cover'],],
        [
          ['ace', 'spades', 'blue cover'],
          ['ace', 'spades', 'red cover'],
        ],
        [
          ['ace', 'diamonds', 'blue cover'],
          ['ace', 'diamonds', 'red cover'],
        ],
        [
          ['ace', 'clubs', 'blue cover'],
          ['ace', 'clubs', 'red cover'],
        ],
      ],
      [
        [
          ['king', 'hearts', 'blue cover'],
          ['king', 'hearts', 'red cover'],
        ],
        [
          ['king', 'spades', 'blue cover'],
          ['king', 'spades', 'red cover'],
        ],
        [
          ['king', 'diamonds', 'blue cover'],
          ['king', 'diamonds', 'red cover'],
        ],
        [
          ['king', 'clubs', 'blue cover'],
          ['king', 'clubs', 'red cover'],
        ],
      ],
      [
        [
          ['queen', 'hearts', 'blue cover'],
          ['queen', 'hearts', 'red cover'],
        ],
        [
          ['queen', 'spades', 'blue cover'],
          ['queen', 'spades', 'red cover'],
        ],
        [
          ['queen', 'diamonds', 'blue cover'],
          ['queen', 'diamonds', 'red cover'],
        ],
        [
          ['queen', 'clubs', 'blue cover'],
          ['queen', 'clubs', 'red cover'],
        ],
      ]
    ];
    expect(expansion).to.eql(expected);
  });


  it('should throw if null or undefined', () => {
    const fn = (e: number[][]) => cartesian(e);
    checkThrow(fn);
  });

});


