import {last} from './last';
import {None, Option, Some} from 'fnxt/option';

export const tryLast = <T>(array: T[]): Option<T> => array.length ? Some(last(array)) : None;
