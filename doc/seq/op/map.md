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
