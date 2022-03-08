### SEQ.range
A sequence in a range.

#### Type
```ts
type range = (from:number,to:number,step:number=1)=>Seq<number>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(1,6,2);
chooser(seq) // -> {1,3,5}
```
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(1,4);
chooser(seq) // -> {1,2,3}
```
