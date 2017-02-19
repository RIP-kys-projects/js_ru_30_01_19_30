import { ADD_NEW_COMMENT } from '../constants'

export default (state = 0, action) => {
    const { type, id } = action;

    switch (type) {
        case ADD_NEW_COMMENT:
            return state
    }

    return state
}