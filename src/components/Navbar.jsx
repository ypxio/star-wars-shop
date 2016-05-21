"use strict"
var React = require('react')
var {Component} = React
var {Link} = require('react-router')

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
                <NavbarHeader />
                <MenuNavbar />
            </div>
        )
    }
}

class NavbarHeader extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="navbar-header">
                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to='/' className="navbar-brand">StarShopWars</Link>
            </div>
        )
    }
}

class MenuNavbar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav id="bs-navbar" className="collapse navbar-collapse">
                <MenuNavbarLeft />
                <MenuNavbarRight />
            </nav>
        )
    }
}

class MenuNavbarLeft extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className="nav navbar-nav">
                <li>
                    <Link to='/item'>Browse Planets</Link>
                </li>
            </ul>
        )
    }
}

class MenuNavbarRight extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to='/'>Your Cart</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
            </ul>
        )
    }
}

module.exports = Navbar
