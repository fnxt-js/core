import {None, Option, Some} from '../../option/option';
import {last} from './last';

export const tryLast = <T>(array: T[]): Option<T> => array.length ? Some(last(array)) : None;
