import {isNone, Option} from 'fnxt/option';

export const toArray = <T>(option: Option<T>): [] | [T] => isNone(option) ? [] : [option.value];

