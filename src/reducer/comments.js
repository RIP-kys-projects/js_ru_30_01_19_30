import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ALL_COMMENTS, FAIL, SUCCESS, START} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    entities: arrayToMap([])
};

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_ALL_COMMENTS + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response.records)
            }
    }

    return state
}