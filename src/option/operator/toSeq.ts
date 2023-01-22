import {isNone, Option} from 'fnxt/option';
import {empty, of} from 'fnxt/seq';
import {Seq} from 'fnxt/fnxt-types';

export const toSeq = <T>(option: Option<T>): Seq<T> => isNone(option) ? empty : of(option.value);
