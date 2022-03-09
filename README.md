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
```ts
type map= <E>(fn:((e:E) => boolean)) => (a:Array<E>) => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const isEven = ARRAY.filter((x: number) => x % 2 == 0);
isEven(array) // -> [0, 2]
```


### ARRAY.map
Maps each value of an array to another value and returns a new array.

#### Type
```ts
type map = <E,F>(e: UnaryFunction<E, F>) =>  (a:Array<E>) => Array<R>
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
```ts
type collect = <E, F>(mapping: (e: E) => Iterable<F>) => (seq: Seq<E>)=> Seq<F>
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
```ts
type filter= <E>(fn:((e:E) => boolean)) => (s:Seq<E>) => boolean
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
```ts
filter: <E>(fn:((e:E) => boolean)) => (s:Seq<E>) => Seq<E>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const isEven = SEQ.filter((x: number) => x % 2 == 0);
isEven(seq) // -> {0, 2}
```

### SEQ.head
Returns the first value of a sequence.
Throws an Error if the sequence is empty.
#### Type
```ts
head: <E>(s:Seq<E>) => E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const head = SEQ.head;
head(seq) // -> 2
```

### SEQ.isEmpty

Returns `true` if the sequence is empty, `false` otherwise.
#### Type
```ts
isEmpty: <E>(s:Seq<E>) => boolean
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const isEmpty = SEQ.isEmpty;
isEmpty(seq) // -> false
```

### SEQ.last
Returns the last value of a sequence. Consumes the sequence before returning.
Throws an Error if the sequence is empty.
Does not terminate on infinite sequences.
#### Type
```ts
last: <E>(s:Seq<E>) => E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const last = SEQ.last;
last(seq) // -> 4
```

### SEQ.length
Returns the length of a sequence. Consumes the sequence before returning.
Returns `0` if the sequence is empty.
Does not terminate on infinite sequences.
#### Type
```ts
length: <E>(s:Seq<E>) => number
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const length = SEQ.length;
length(seq) // -> 3
```

### SEQ.map
Maps each value of a sequence to another value and returns a new sequence.

#### Type
```ts
type map = <E,F>(e: UnaryFunction<E, F>) => (seq:Seq<E>) => Seq<F>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const plusOne = SEQ.map((x: number) => x + 1);
plusOne(seq) // -> {2, 3, 4}
```

### SEQ.maxBy
Maps each value of a sequence to a numeric value and returns the value with the highest value.

#### Type
```ts
type maxBy = <E>(e: UnaryFunction<E, number>) => (seq:Seq<E>) => E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of('aa', 'bbb', 'c', 'dd');
const maxBy = SEQ.maxBy((x: string) => x.length);
maxBy(seq) // -> 'bbb'
```

### SEQ.minBy
Maps each value of a sequence to a numeric value and returns the value with the highest value.

#### Type
```ts
type minBy = <E>(e: UnaryFunction<E, number>) => (seq:Seq<E>) => E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of('aa', 'bbb', 'c', 'dd');
const minBy = SEQ.minBy((x: string) => x.length);
minBy(seq) // -> 'c'
```
 

## Sequence Generator
### SEQ.empty
An empty sequence.

#### Type
```ts
type chooseT = Seq<never>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.empty;
chooser(seq) // -> {}
```

### SEQ.range
A infinite sequence. Does not stop to give values unless used with truncating functions.
See: `head`,`take`,`takeWhile`

#### Type
```ts
type infinite = (start:number,step:number=1)=>Seq<number>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.infinite(1,2);
chooser(seq) // -> {1,3,5,...}
```


### SEQ.of
A sequence of given Values.

#### Type
```ts
type of = <E>(...values:e[])=>Seq<E>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.of(1,2,3);
chooser(seq) // -> {1,2,3}
```

### SEQ.range
A sequence in a range.

#### Type
```ts
type range = (from:number,to:number,step:number=1)=>Seq<number>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(1,6,2);
chooser(seq) // -> {1,3,5}
```
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(1,4);
chooser(seq) // -> {1,2,3}
```
