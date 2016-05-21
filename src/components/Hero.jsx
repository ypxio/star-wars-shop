"use strict"
var React = require('react')
var {Component} = React
var {Link} = require('react-router')

class Hero extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Buy yourself a planet',
            subtitle: 'Now you can buy awesome planets, spaceships, or vehicles from the Star Wars World easily!',
            madeby: 'Originally created by Yuri Pratama',
        }
    }
    render(){
        return (
            <div className="bs-docs-masthead" id="hero" role="main" tabindex="-1">
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <p className="lead">{this.state.subtitle}</p>
                    <p className="lead">
                        <Link to='/item' className="btn btn-outline-inverse btn-lg">
                            Browse Our Awesome Planets
                        </Link>
                    </p>
                    <p className="version">{this.state.madeby}</p>
                </div>
            </div>
        )
    }
}

module.exports = Hero;
