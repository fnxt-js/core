import {expect} from 'chai';

function checkThrowUndefined<A,B>(fn: (array: A) => B) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(() => fn(null)).to.throw();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(() => fn(undefined)).to.throw();
}

function checkThrowNull<A,B>(fn: (array: A) => B) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(() => fn(null)).to.throw();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(() => fn(undefined)).to.throw();
}

export function checkThrow<A,B>(fn: (array: A[]) => B) {
  checkThrowNull(fn);
  checkThrowUndefined(fn);
}
