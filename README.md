# FNXT 

fnxt library for JavaScript and TypeScript

## Installation
```shell
npm i fnxt
```

## Array Operator
### ARRAY.choose
Applies a function to each element in an array and then returns an array of values v where 
the applied function returned Some(v). Returns an empty array when the input array is empty 
or when the applied chooser function returns None for all elements.

#### Type
```ts
type chooseT = <E,F>(e: Chooser<E, F>) => (array:Array<E>) => Array<F>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.of(0, 1, 2, 3, 4);
const chooser = ARRAY.choose(
  (x: number) => x % 2 === 0
    ? Opt.Some(x * 2)
    : Opt.None
);
chooser(array) // -> [0, 4, 8]
```

### ARRAY.chunkBySize
Divides the input array into chunks of size at most chunkSize.

#### Type
```ts
type chunkBySize = <E>(count: number) => (array1: Array<E>) => Array<E[]>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.of(0, 1, 2, 3, 4, 5, 6);
const chunkBySize = ARRAY.chunkBySize(3);
chunkBySize(array)// -> [[0, 1, 2], [3, 4, 5], [6],]]
```

### ARRAY.collect
Applies the given function to each element of the array and concatenates all the results.

#### Type
```ts
type collect = <E, F>(mapping: (e: E) => Iterable<F>) => (array: Array<E>)=> Array<F>
```

#### Example
```ts
const gen = ARRAY.of(1, 2, 3,);
const mapping = (x: number) => [x, x + 1];
const collect = ARRAY.collect(mapping);
collect(gen)  // -> [1, 2, 2, 3, 3, 4];
```

### ARRAY.concat
Takes two arrays and concatenates them.

#### Type
```ts
type concat = <E>(array1: Array<E>) => (array2: Array<E>) => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array1 = ARRAY.range(0, 4, 1);
const array2 = ARRAY.range(10, 14, 1);
ARRAY.concat(array1)(array2) // -> [0, 1, 2, 3, 10, 11, 12, 13];
```

### ARRAY.every
The `predicate` is applied to the elements of the input array. 
If any application returns `false` then the overall result is `false` 
and no further elements are tested. 
Otherwise, `true` is returned.

#### Type
```ts
type filter= <E>(predicate:((e:E) => boolean)) => (s:Array<E>) => boolean
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const every = ARRAY.every((x: number) => x % 2 == 0);
every(array) // -> false
```


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

### ARRAY.head
Returns the first value of an array.
Throws an Error if the array is empty.
#### Type
```ts
head: <E>(s:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const head = ARRAY.head;
head(array) // -> 2
```

### ARRAY.isEmpty

Returns `true` if the array is empty, `false` otherwise.
#### Type
```ts
isEmpty: <E>(s:Array<E>) => boolean
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const isEmpty = ARRAY.isEmpty;
isEmpty(array) // -> false
```

### ARRAY.last
Returns the last value of an array. Consumes the array before returning.
Throws an Error if the array is empty.
Does not terminate on infinite arrays.
#### Type
```ts
last: <E>(s:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const last = ARRAY.last;
last(array) // -> 4
```

### ARRAY.length
Returns the length of an array. Consumes the array before returning.
Returns `0` if the array is empty.
Does not terminate on infinite arrays.
#### Type
```ts
length: <E>(s:Array<E>) => number
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const length = ARRAY.length;
length(array) // -> 3
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

const array = [0, 1, 2];
const plusOne = ARRAY.map((x: number) => x + 1);
plusOne(array) // -> [2, 3, 4]
```

### ARRAY.maxBy
Maps each value of an array to a numeric value and returns the value with the highest value.

#### Type
```ts
type maxBy = <E>(e: UnaryFunction<E, number>) => (array:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of('aa', 'bbb', 'c', 'dd');
const maxBy = ARRAY.maxBy((x: string) => x.length);
maxBy(array) // -> 'bbb'
```

### ARRAY.minBy
Maps each value of an array to a numeric value and returns the value with the highest value.

#### Type
```ts
type minBy = <E>(e: UnaryFunction<E, number>) => (array:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of('aa', 'bbb', 'c', 'dd');
const minBy = ARRAY.minBy((x: string) => x.length);
minBy(array) // -> 'c'
```
 

### ARRAY.reduce
Reduces the array to a single value. `reducer` is used to fold the values. 
Consumes the whole array before returning a value.

Throws an `Error` if list is empty.


#### Type
```ts
type reduceT = <E>(reducer: (e: E, f: E) => E) => (array: Array<E>)=> E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(1, 2, 3, 4);
const reduce = ARRAY.reduce((a:number, b:number) => a+b);
reduce(array) // -> 10
```
 

### ARRAY.some
The `predicate` is applied to the elements of the input array. 
If any application returns `true` then the overall result is `true` 
and no further elements are tested. 
Otherwise, `false` is returned.

#### Type
```ts
type filter= <E>(predicate:((e:E) => boolean)) => (s:Array<E>) => boolean
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const some = ARRAY.some((x: number) => x % 2 == 0);
some(array) // -> false
```

### ARRAY.takeWhile
Returns an array that contains all elements of the original array 
while the given `predicate` returns `true`, 
and then returns no further elements.
#### Type
```ts
type takeWhile = <E>(predicate: Predicate<E>) => (array: Array<E>) => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.range(0, 10, 1);
ARRAY.takeWhile(lessThan(5))(array) // -> [0, 1, 2, 3, 4];
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

### SEQ.concat
Takes two sequences and concatenates them.

#### Type
```ts
type concat = <E>(seq1: Seq<E>) => (seq2: Seq<E>) => Seq<E>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq1 = SEQ.range(0, 4, 1);
const seq2 = SEQ.range(10, 14, 1);
SEQ.concat(seq1)(seq2) // -> {0, 1, 2, 3, 10, 11, 12, 13};
```

### SEQ.every
The `predicate` is applied to the elements of the input sequence. 
If any application returns `false` then the overall result is `false` 
and no further elements are tested. 
Otherwise, `true` is returned.

#### Type
```ts
type filter= <E>(predicate:((e:E) => boolean)) => (s:Seq<E>) => boolean
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
 

### SEQ.reduce
Reduces the sequence to a single value. `reducer` is used to fold the values. 
Consumes the whole sequence before returning a value.

Throws an `Error` if list is empty.


#### Type
```ts
type reduceT = <E>(reducer: (e: E, f: E) => E) => (seq: Seq<E>)=> E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(1, 2, 3, 4);
const reduce = SEQ.reduce((a:number, b:number) => a+b);
reduce(seq) // -> 10
```
 

### SEQ.some
The `predicate` is applied to the elements of the input sequence. 
If any application returns `true` then the overall result is `true` 
and no further elements are tested. 
Otherwise, `false` is returned.

#### Type
```ts
type filter= <E>(predicate:((e:E) => boolean)) => (s:Seq<E>) => boolean
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const some = SEQ.some((x: number) => x % 2 == 0);
some(seq) // -> false
```

### SEQ.takeWhile
Returns a sequence that contains all elements of the original sequence 
while the given `predicate` returns `true`, 
and then returns no further elements.
#### Type
```ts
type takeWhile = <E>(predicate: Predicate<E>) => (seq: Seq<E>) => Seq<E>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(0, 10, 1);
SEQ.takeWhile(lessThan(5))(seq) // -> {0, 1, 2, 3, 4};
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
