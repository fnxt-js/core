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
