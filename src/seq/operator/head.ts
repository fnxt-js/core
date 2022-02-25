import {Seq} from 'fnxt/fnxt-types';

export const head = <E>(seq: Seq<E>): E => {
    const next = seq[Symbol.iterator]().next();
    if(next.done){
        throw Error('sequence is empty');
    }
    return next.value as E;
};
