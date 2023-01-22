import {isNone, Option} from '../option';

export const defaultValue = <T>(value: T) => (option: Option<T>): T => isNone(option) ? value : option.value;
