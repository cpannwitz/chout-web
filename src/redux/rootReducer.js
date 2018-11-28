import { combineReducers } from 'redux'

// import all relevant reducers

// combine all reducers imported to the ROOT-REDUCER, which is used for the redux store
const combinedReducers = combineReducers({})

// important: export as default to preserve HotModuleReloading in development
export default combinedReducers
