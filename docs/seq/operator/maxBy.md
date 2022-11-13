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
