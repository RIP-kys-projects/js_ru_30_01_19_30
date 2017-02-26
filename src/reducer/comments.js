import {ADD_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

//const startDefaultState = arrayToMap(defaultComments)

const defaultState = new DefaultReducerState();
const startDefaultState = defaultState.set('entities', arrayToMap(defaultComments, CommentModel));

export default (state = startDefaultState, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))
    }

    return state
}