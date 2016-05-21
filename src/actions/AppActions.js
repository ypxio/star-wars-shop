var Swapi = require('../api/Swapi')
import { GET_PLANET_LIST, GET_PLANET_DETAIL } from '../constants/AppConstants'

export function GetPlanet (page = 1) {
  const request = Swapi.Get('planets', '', '1');
  return {
    type: GET_PLANET_LIST,
    payload: request
  }
}

export function GetDetailPlanet (id = '') {
  const request = Swapi.Get('planets', id, '');
  return {
    type: GET_PLANET_DETAIL,
    payload: request
  }
}

  // var type = 'planet';
  // return (dispatch) => {
  //   dispatch({
  //     type: AppConstants.GET_PLANET
  //   })
  //   Swapi.Get(type, null, page)
  //   .then((response)  => {
  //     dispatch({
  //       type: AppConstants.GET_PLANET_SUCCESS,
  //       payload: response.data
  //     })
  //   })
  //   .catch((error) => {
  //     dispatch({
  //       type: AppConstants.GET_PLANET_ERROR
  //     })
  //   })
  // }
