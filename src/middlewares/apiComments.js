import $ from 'jquery'
import { SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    if (!action.callAPIComment) return next(action);
    const {callAPIComment, type, ...rest} = action;

    $.get(callAPIComment)
        .done(response => next({...rest, type: type + SUCCESS, response}))
        .fail(error => next({...rest, type: type + FAIL, error}));
}