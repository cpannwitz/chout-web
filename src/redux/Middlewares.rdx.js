const errorHandler = (error, getState, lastAction, dispatch) => {
  console.error(error)
  console.debug('Current state: ', getState())
  console.debug('Last action was: ', lastAction)
}

export const syncErrorCatch = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    errorHandler(err, store.getState, action, store.dispatch)
    return err
  }
}
