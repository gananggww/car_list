import { createStore, applyMiddleware } from 'redux'
import garageReducer from '../reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const midty = applyMiddleware(logger, thunk)
const store = createStore(garageReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ,midty)

export default store
