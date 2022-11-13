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
