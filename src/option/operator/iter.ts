import {Consumer} from 'fnxt/fnxt-types';
import {isSome, Option} from 'fnxt/option';
import {tap} from '../../internal/tap';

export const iter = <T>(action: Consumer<T>) => tap((option: Option<T>) => isSome(option) && action(option.value));

