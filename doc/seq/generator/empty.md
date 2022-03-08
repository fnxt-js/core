### SEQ.empty
An empty sequence.

#### Type
```ts
type chooseT = Seq<never>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.empty;
chooser(seq) // -> {}
```
