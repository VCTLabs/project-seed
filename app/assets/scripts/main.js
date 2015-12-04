'use strict';

var config = require('./config');
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Home = require('./components/home');

console.log.apply(console, config.consoleMessage);
console.log('Environment', config.environment);

ReactDOM.render(
  <Home />, document.getElementById('site-canvas')
);
