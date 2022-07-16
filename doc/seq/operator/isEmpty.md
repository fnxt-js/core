### SEQ.isEmpty

Returns `true` if the sequence is empty, `false` otherwise.
#### Type
```ts
type isEmpty = <E>(s:Seq<E>) => boolean
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const isEmpty = SEQ.isEmpty;
isEmpty(seq) // -> false
```
