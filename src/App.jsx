"use strict"
var React = require('react')
var {RouteHandler} = require('react-router')
var {Component} = React
var Header = require('./components/Header')
var Swapi = require('./api/Swapi')

var { GetPlanet } from './actions/AppActions'
// var store = require('./store/AppStore')

class App extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
      console.log(this.props.GetPlanet())
        // Swapi.Get('planets', 'null', '1')
        // .then((response) => {
        //   if(response.data) {
        //     console.log(response.data)
        //   }
        // })
        // .catch((error) => {
        //   return false
        // })
    }

    render(){
        return (
            <div className="wrapper">
                <Header />
                <RouteHandler {...this.props} />
            </div>
        )
    }
}

module.exports = App
