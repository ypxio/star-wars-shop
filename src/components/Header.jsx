"use strict"
var React = require('react')
var {Component} = React
var Navbar = require('./Navbar')

class Header extends Component {
    constructor(props){
		super(props)
	}
	render(){
		return (
            <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
                <Navbar />
            </header>
		)
	}
}

module.exports = Header
