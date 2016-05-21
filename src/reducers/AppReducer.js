import { combineReducers } from 'redux'
import * as AppConstants from '../constants/AppConstants'
const INTIAL_STATE = { all: [], planet: null };

export default function(state = INTIAL_STATE, action) {
  var type = action.type
  var payload = action.payload
  switch(type) {
    case AppConstants.GET_PLANET_LIST:
      return {
        ...state, all: payload.data.results
      }
    case AppConstants.GET_PLANET_DETAIL:
      return {
        ...state, all: payload.payload.data
      }
    default:
      return state;
  }
}
