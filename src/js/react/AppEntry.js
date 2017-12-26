'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderToolbar = require('./HeaderToolbar.jsx');

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(HeaderToolbar, null),
	'Hello'
), document.getElementById('App'));
