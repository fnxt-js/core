### SEQ.last
Returns the last value of a sequence. Consumes the sequence before returning.
Throws an Error if the sequence is empty.
Does not terminate on infinite sequences.
#### Type
```ts
type last = <E>(s:Seq<E>) => E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const last = SEQ.last;
last(seq) // -> 4
```
