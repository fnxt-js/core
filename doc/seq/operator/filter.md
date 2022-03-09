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
isEven(seq) // -> {0, 2}
```
