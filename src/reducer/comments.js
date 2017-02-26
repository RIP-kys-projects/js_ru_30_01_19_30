import {LOAD_COMMENTS, ADD_COMMENT, SUCCESS, START} from '../constants'
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
//const startDefaultState = defaultState.set('entities', arrayToMap(defaultComments, CommentModel));

export default (state = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return state.set('isLoading', true)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('isLoading', false)
                .set('entities', arrayToMap(response, CommentModel))
                .set('isLoaded', true)

        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))
    }

    return state
}