"use strict"
var React = require('react')
var {Component} = React
var {Link} = require('react-router')

class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Planet List',
            subtitle: 'List of all planets on Star Wars',
        }
    }
    render(){
        return (
            <div className="row">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
        )
    }
}

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Planet List',
            subtitle: 'List of all planets on Star Wars',
        }
    }
    render(){
        return (
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <div className="caption">
                    <h3>Planet Name</h3>
                    <p>$1000</p>
                    <p>
                    <a href="#" className="btn btn-default" role="button">View Details</a>
                    &nbsp;
                    <a href="#" className="btn btn-primary" role="button">Buy this planet</a>
                    </p>
                  </div>
                </div>
              </div>
        )
    }
}

module.exports = Items
