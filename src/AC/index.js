import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_DATE_RANGE, CHANGE_SELECTION,
    LOAD_ALL_ARTICLES, LOAD_ALL_COMMENTS,
    START,SUCCESS, FAIL,
    ADD_NEW_COMMENT} from '../constants'
import $ from 'jquery'

/*- increment -*/
export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

/*- deleteArticle -*/
export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

/*- changeDateRange -*/
export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

/*- changeSelection -*/
export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

/*- loadAllArticles -*/
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

/*- loadAllArticlesThunk -*/
export function loadAllArticlesThunk() {
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        setTimeout(() => {
            $.get('/api/article')
                .done(response => {
                    console.log('response from loadAllArticlesThunk: ', response);
                    return dispatch({
                            type: LOAD_ALL_ARTICLES + SUCCESS,
                            response
                        })
                    }
                )
                .fail(error => dispatch({
                    type: LOAD_ALL_ARTICLES + FAIL,
                    error
                }))
        }, 1000)
    }
}

/*- loadAllComments -*/
export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENTS,
        callAPIComment: '/api/comment'
    }
}

/*- addNewComment -*/
export function addNewComment(data) {
    return {
        type: ADD_NEW_COMMENT,
        payload: data,
        generateRandomId: true
    }
}