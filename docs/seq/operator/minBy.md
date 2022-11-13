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
 
