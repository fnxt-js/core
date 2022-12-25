import {expect} from 'chai';
import {pairwise, range, splitInto} from '../../../../src/array';

describe('splitInto', () => {
  it('should splitInto', () => {

    expect(() => splitInto(5)([])).to.throw();

    expect(splitInto(4)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .to.eql([[1, 2, 3], [4, 5, 6], [7, 8], [9, 10]]);
    expect(splitInto(5)([1])).to.eql([[1]]);
    expect(splitInto(5)([1, 2, 3, 4])).to.eql([[1], [2], [3], [4]]);
    expect(splitInto(3)([1, 2, 3, 4, 5, 6])).to.eql([[1, 2], [3, 4], [5, 6]]);
    expect(splitInto(3)([1, 2, 3, 4, 5])).to.eql([[1, 2], [3, 4], [5]]);
    expect(splitInto(3)([1, 2, 3, 4])).to.eql([[1, 2], [3], [4]]);

  });

  let chunks: number = Math.round(Math.random() * 10);
  let size: number = Math.round(Math.random() * 100000);

  it(`should splitInto property test ${size} - ${chunks} `, () => {
    const array = range(0, size);

    expect(splitInto(chunks)(array).length).to.eql(chunks);

    expect(splitInto(chunks)(array).map(e => e.length)
      .every((v) =>
        v >= Math.floor(size / chunks)
        && v <= Math.ceil(size / chunks)
      )
    ).to.be.true;

    expect(pairwise(splitInto(chunks)(array).map(e => e.length))
      .every(([a, b]) => a >= b)
    ).to.be.true;
  });
});
