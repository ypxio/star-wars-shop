"use strict"
var React = require('react')
var {Component} = React
var {Link} = require('react-router')

class PageHero extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Planet List',
            subtitle: 'List of all planets on Star Wars',
        }
    }
    render(){
        return (
            <div className="bs-docs-header" id="content" tabindex="-1">
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.subtitle}</p>
                </div>
            </div>
        )
    }
}

module.exports = PageHero
