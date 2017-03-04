import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record, OrderedMap} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new ( Record({
    entities: new OrderedMap({})
}) )


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_PAGE_COMMENTS + SUCCESS:
            console.log('LOAD_PAGE_COMMENTS + SUCCESS');
            return state.mergeIn(['entities'], arrayToMap(response.records, CommentModel))
    }

    return state
}