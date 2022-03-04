# FNXT 

fnxt library for JavaScript and TypeScript

## Installation
```shell
npm i fnxt
```

## Array

### ARRAY.filter
Filter values of an array with a predicate and returns a new array.

#### Type
```
map: (E => boolean) => Array<E> => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const isEven = ARRAY.filter((x: number) => x % 2 == 0);
[...isEven(array)] // -> {1, 2}
```


### ARRAY.map
Maps each value of an array to another value and returns a new array.

#### Type
```
map: (E => R) => Array<E> => Array<R>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const seq = [0, 1, 2];
const plusOne = ARRAY.map((x: number) => x + 1);
plusOne(seq) // -> [2, 3, 4]
```

## Sequence Operator
### SEQ.choose
Applies a function to each element in a sequence and then returns a sequence of values v where 
the applied function returned Some(v). Returns an empty sequence when the input sequence is empty 
or when the applied chooser function returns None for all elements.

#### Type
```ts
type chooseT = <E,F>(e: Chooser<E, F>) => (seq:Seq<E>) => Seq<F>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.of(0, 1, 2, 3, 4);
const chooser = SEQ.choose(
  (x: number) => x % 2 === 0
    ? Opt.Some(x * 2)
    : Opt.None
);

chooser(seq) // -> {0, 4, 8}
```

### SEQ.chunkBySize
Divides the input sequence into chunks of size at most chunkSize.

#### Type
```ts
type chunkBySize = <E>(count: number) => (seq1: Seq<E>) => Seq<E[]>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.of(0, 1, 2, 3, 4, 5, 6);
const chunkBySize = SEQ.chunkBySize(3);
chunkBySize(seq)// -> {[0, 1, 2], [3, 4, 5], [6],]}
```

### SEQ.collect
Applies the given function to each element of the sequence and concatenates all the results.

#### Type
```
collect = <E, F>(mapping: (e: E) => Iterable<F>) => (seq: Seq<E>): Seq<F>
```

#### Example
```ts
const gen = SEQ.of(1, 2, 3,);
const mapping = (x: number) => [x, x + 1];
const collect = SEQ.collect(mapping);
collect(gen)  // -> {1, 2, 2, 3, 3, 4};
```

### SEQ.every
The predicate is applied to the elements of the input sequence. 
If any application returns false then the overall result is false 
and no further elements are tested. 
Otherwise, true is returned.

#### Type
```
filter: (E => boolean) => Seq<E> => boolean
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const every = SEQ.every((x: number) => x % 2 == 0);
every(seq) // -> false
```

### SEQ.filter
Filter values of a sequence with a predicate and returns a new sequence.

#### Type
```
filter: (E => boolean) => Seq<E> => Seq<E>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const isEven = SEQ.filter((x: number) => x % 2 == 0);
isEven(seq) // -> {1, 2}
```

### SEQ.map
Maps each value of a sequence to another value and returns a new sequence.

#### Type
```
type mapT = <E,F>(e: UnaryFunction<E, F>) => (seq:Seq<E>) => Seq<F>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const plusOne = SEQ.map((x: number) => x + 1);
plusOne(seq) // -> {2, 3, 4}
```

