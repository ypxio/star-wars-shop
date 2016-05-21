"use strict"
var React = require('react')
var {Component} = React
var {Link} = require('react-router')
var Items = require('./Items')

class ItemContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Planet List',
            subtitle: 'List of all planets on Star Wars',
        }
    }
    render(){
        return (
            <div className="container bs-docs-container">
                <Items />
            </div>
        )
    }
}

module.exports = ItemContainer
