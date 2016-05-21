var http = require('axios')
const base_url_api = 'http://swapi.co/api'

export function Get ( type = '', id = '', page = 1) {
  var request
  if( id == '' ) {
    request = http.get(`${base_url_api}/${type}/?page=${page}`)
  } else {
    request = http.get(`${base_url_api}/${type}/${id}`)
  }
  return request
}
