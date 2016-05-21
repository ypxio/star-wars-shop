"use strict"
var React = require('react')
var http = require('http')
var {Component} = React
var Hero = require('../components/Hero')

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Star Shop Wars"
        }
    }
    render(){
        return (
            <div className="" id="landing">
                <Hero />
            </div>
        );
    }
}

module.exports = Landing
