import {None, Option, Some} from 'fnxt/option';
import {head} from './head';


export const tryHead = <T>(array: T[]): Option<T> => array.length ? Some(head(array)) : None;
