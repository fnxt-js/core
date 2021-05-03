import {KeyProjection} from '../../types/types';

export const groupBy = <E>(mapping: KeyProjection<E>) => (array: E[]): E[][] => {

    const map = {};
    for (const element of array) {
        const key = mapping(element);
        let list = map[key];
        if (!list) {
            list = [];
            map[key] = list;
        }
        list.push(element);
    }
    return Object.values(map);

};

