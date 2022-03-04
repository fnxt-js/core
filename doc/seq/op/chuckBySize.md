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
