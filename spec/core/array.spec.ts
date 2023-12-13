import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import 'mocha';

import * as ARRAY from '../../src/array';
import {consoleWarnSpy} from './console.spy';

const {expect} = chai;
chai.use(sinonChai);

describe('array', () => {

  describe('operator', () => {
    const operators = [
      'allCombinations', 'allPairs', 'append',
      'average', 'averageBy', 'choose',
      'chunkBySize', 'collect', 'compareWith',
      'concat', 'contains', 'copy',
      'countBy', 'distinctBy', 'every',
      'exists', 'fill', 'filter',
      'find', 'findBack', 'findIndex',
      'findIndexBack', 'flatten', 'fold',
      'foldBack', 'forall', 'groupBy', 'head',
      'init', 'insertAt', 'interleave', 'isEmpty',
      'iter', 'last', 'length',
      'map', 'maxBy', 'minBy',
      'pairwise','pairwiseWith', 'partition', 'push',
      'reduce', 'reduceBack', 'replicate',
      'rev', 'rotate', 'rotateBack',
      'scan', 'scanBack', 'skip',
      'skipWhile', 'sort', 'sortBy',
      'sortByDescending', 'sortDescending', 'sortInPlace',
      'sortInPlace', 'sortInPlaceBy', 'sortInPlaceWith',
      'sortInPlaceWith', 'sortWith', 'sortWith',
      'splitAt', 'splitInto', 'stride', 'strideWindowed',
      'sum', 'sumBy', 'remove', 'tail', 'take',
      'takeWhile', 'takeWhileInclusive', 'transpose',
      'truncate', 'tryFind', 'tryFindBack',
      'tryFindIndex', 'tryFindIndexBack', 'tryHead',
      'tryLast', 'uniqueBy', 'updateAt',
      'where', 'windowed', 'zip',
      'zip3', 'zipWith'
    ]
      .sort();
    operators.map(name => './array/operator/' + name + '.spec')
      .forEach(require);
  });

  describe('generator', () => {
    describe('empty', () => {

      it('should build empty', async () => {
        expect(ARRAY.length(ARRAY.empty)).to.eql(0);
      });
    });

    describe('of', () => {
      it('should of', async () => {
        const array = ARRAY.of(1, 2, 3);
        expect(array).to.eql([1, 2, 3]);
      });
    });


    describe('singleton', () => {
      it('should create', async () => {
        expect(ARRAY.singleton(42)).to.eql([42]);
      });
    });


    describe('charRange', () => {
      it('should build charRange a-z', async () => {
        const array = ARRAY.charRange('a', 'z');
        expect(ARRAY.length(array)).to.eql(26);
        expect(array).to.eql('abcdefghijklmnopqrstuvwxyz'.split(''));
      });

      it('should build charRange A-Z', async () => {
        const array = ARRAY.charRange('A', 'Z');
        expect(ARRAY.length(array)).to.eql(26);
        expect(array).to.eql('abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase().split(''));
      });

      it('should build charRange a-f', async () => {
        const array = ARRAY.charRange('a', 'f');
        expect(ARRAY.length(array)).to.eql(6);
        expect(array).to.eql('abcdef'.split(''));

      });

      it('should build charRange z-a', async () => {
        const array = ARRAY.charRange('z', 'a');
        expect(ARRAY.length(array)).to.eql(26);
        expect(array).to.eql('abcdefghijklmnopqrstuvwxyz'.split('').reverse());
      });

      it('should build charRange a-f step 2', async () => {
        const array = ARRAY.charRange('a', 'f', 2);
        expect(ARRAY.length(array)).to.eql(3);
        expect(array).to.eql('ace'.split(''));
      });

      it('should build charRange f-a step 2', async () => {
        const array = ARRAY.charRange('f', 'a', 2);
        expect(ARRAY.length(array)).to.eql(3);
        expect(array).to.eql('fdb'.split(''));
      });


      it('should throw when charRange arguments are invalid', async () => {
        expect(() => ARRAY.charRange('a', 'z', 1)).not.to.throw();
        expect(() => ARRAY.charRange('a', 'z', 0)).to.throws('step must be greater than 0');
        expect(() => ARRAY.charRange('a', 'z', -1)).to.throws('step must be greater than 0');
        expect(() => ARRAY.charRange('', 'z', 1)).to.throws('from must be a character (length: 1)');
        expect(() => ARRAY.charRange('aa', 'z', 1)).to.throws('from must be a character (length: 1)');
        expect(() => ARRAY.charRange('a', '', 1)).to.throws('to must be a character (length: 1)');
        expect(() => ARRAY.charRange('a', 'zz', 1)).to.throws('to must be a character (length: 1)');
      });

    });


    describe('range', () => {
      it('should build range 0..4', async () => {
        const array = ARRAY.range(0, 4);
        expect(array).to.length(4);
        expect(array).to.eql([0, 1, 2, 3]);
      });
      it('should build range 4..0', async () => {
        const array = ARRAY.range(4, 0);
        expect(array).to.length(4);
        expect(array).to.eql([4, 3, 2, 1]);
      });
      it('should build range 0..4 step 2', async () => {
        const array = ARRAY.range(0, 4, 2);
        expect(array).to.length(2);
        expect(array).to.eql([0, 2]);
      });
      it('should build range 4..0', async () => {
        const array = ARRAY.range(4, 0, 2);
        expect(array).to.length(2);
        expect(array).to.eql([4, 2]);
      });
      it('should build empty range', async () => {
        const array = ARRAY.range(4, 4, 1);
        expect(array).to.length(0);
        expect(array).to.eql([]);
      });
      it('should build range 4..0, but warn', async () => {
        const stub = consoleWarnSpy();
        stub.resolves();
        const array = ARRAY.range(4, 0, -2);

        expect(stub).to.have.been.calledWith(
          'fnxt/array/generator/range with negative steps are deprecated! just use a positive step value'
        );
        stub.restore();
        stub.resetHistory();
        expect(array).to.length(2);
        expect(array).to.eql([4, 2]);
      });
      it('should not build range step 0', async () => {
        expect(() => ARRAY.range(Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), 0))
          .to.throw();
      });

      it('should not build range 0..4 step -1', async () => {
        expect(() => ARRAY.range(0, Math.round(Math.random() * 1000), -1))
          .to.throw();
      });

      it('should range up', () => {
        expect(ARRAY.range(1, 5)).to.eql([1, 2, 3, 4]);
      });

      it('should range down', () => {
        const stub = consoleWarnSpy();
        expect(ARRAY.range(4, 0, -1)).to.eql([4, 3, 2, 1]);

        expect(stub).to.have.been.calledWith(
          'fnxt/array/generator/range with negative steps are deprecated! just use a positive step value'
        );
        stub.restore();
        stub.resetHistory();
      });

      it('should range up step', () => {
        expect(ARRAY.range(1, 11, 2)).to.eql([1, 3, 5, 7, 9]);

      });

      it('should range down step', () => {
        const stub = consoleWarnSpy();
        expect(ARRAY.range(10, 0, -2)).to.eql([10, 8, 6, 4, 2,]);

        expect(stub).to.have.been.calledWith(
          'fnxt/array/generator/range with negative steps are deprecated! just use a positive step value'
        );
        stub.restore();
        stub.resetHistory();
      });

      it('should range empty', () => {
        expect(ARRAY.range(10, 10, 0.0001)).to.eql([]);

      });

      it('should range one', () => {
        expect(ARRAY.range(9, 10, 100)).to.eql([9]);

      });

      it('should throw range ', () => {
        expect(() => ARRAY.range(9, 10, 0)).to.throws();
      });

      it('should range small step', () => {

        const l = ARRAY.zip<number>(ARRAY.range(0, 1, .2))<number>([0, .2, .4, .6, .8]);
        expect(l.length).to.eql(5);
        l.forEach(([a, b]) => expect(a).to.approximately(b, 1e-8));

      });
    });
  });
});














