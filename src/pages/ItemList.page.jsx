"use strict"
var React = require('react')
var {Component} = React
var PageHero = require('../components/PageHero')
var ItemContainer = require('../components/ItemContainer')

class ItemList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <PageHero />
                <ItemContainer />
            </div>
        );
    }
}

module.exports = ItemList
