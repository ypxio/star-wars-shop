"use strict"
var React = require('react')
var Router = require('react-router')
var {Link, Route, RouteHandler, DefaultRoute} = Router

// pages

var App = require('./App')
var Landing = require('./pages/Landing.page')
var ItemList = require('./pages/ItemList.page')

// routes

var routes = (
    <Route handler={App}>
        <Route name="landing" path="/" handler={Landing} />
        <Route name="itemlist" path="/item" handler={ItemList} />
    </Route>
    );

module.exports = routes
