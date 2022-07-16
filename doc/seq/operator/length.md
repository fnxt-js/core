### SEQ.length
Returns the length of a sequence. Consumes the sequence before returning.
Returns `0` if the sequence is empty.
Does not terminate on infinite sequences.
#### Type
```ts
type length = <E>(s:Seq<E>) => number
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const length = SEQ.length;
length(seq) // -> 3
```
