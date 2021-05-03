import {None, Option, Some} from '../../option/option';
import {head} from './head';


export const tryHead = <T>(array: T[]): Option<T> => array.length ? Some(head(array)) : None;
