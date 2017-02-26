import {Map} from 'immutable'

export function arrayToMap(arr, Model) {
    let result = arr.reduce(
        (acc, entity) =>
            acc.set( entity.id, Model ? new Model(entity) : entity )
        , new Map({})
    );
    return result;
}

export function mapToArr(map) {
    return map.valueSeq().toArray()
}