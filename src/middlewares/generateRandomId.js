export default store => next => action => {
    if (!action.generateRandomId) return next(action);
    const newCommentId = Math.random().toString(36).substr(2, 9);

    next({...action, payload: { ...action.payload, newCommentId}})
}