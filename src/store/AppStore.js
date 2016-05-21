import { combineReducers } from 'redux'
import AppReducers from '../reducers/AppReducer'

const rootReducer = combineReducers({
  planet: AppReducers
})

export default rootReducer;

var store = createStore(rootReducer)

module.exports = store
