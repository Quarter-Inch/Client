'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(HeaderToolbar, null),
	React.createElement(Drawer, null),
	'Hello'
), document.getElementById('App'));
