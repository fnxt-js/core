### SEQ.range
A infinite sequence. Does not stop to give values unless used with truncating functions.
See: `head`,`take`,`takeWhile`

#### Type
```ts
type infinite = (start:number,step:number=1)=>Seq<number>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.infinite(1,2);
chooser(seq) // -> {1,3,5,...}
```

