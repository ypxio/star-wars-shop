"use strict"
var React = require('react')
var Router = require('react-router')
var routes = require('./routes')
var RouterContainer = require('./utils/RouterContainer')

var router = Router.run(routes, (Handler, req)=>{
    var params = req.params
    React.render(<Handler params={params} />, document.body)
})

router.transitionTo('/')
RouterContainer.set(router)
