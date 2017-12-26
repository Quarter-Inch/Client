var React = require('react');
var ReactDOM = require('react-dom');


var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');

ReactDOM.render(
	<div>
		<HeaderToolbar />
		<Drawer />
		Hello
	</div>,
	document.getElementById('App')
);