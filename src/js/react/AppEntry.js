'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');
var Card = require('./Card.js');
var LayoutGrid = require('./LayoutGrid.js');
var LayoutGridCell = require('./LayoutGridCell.js');

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(HeaderToolbar, { img: 'https://placehold.jp/150x150.png', adjust: '.toolbar-fixed-adjust' }),
	React.createElement(Drawer, null),
	React.createElement(
		'main',
		{ className: 'toolbar-fixed-adjust' },
		React.createElement(
			LayoutGrid,
			null,
			React.createElement(
				LayoutGridCell,
				null,
				React.createElement(Card, { img: 'https://placehold.jp/150x150.png' })
			),
			React.createElement(
				LayoutGridCell,
				null,
				React.createElement(Card, null)
			),
			React.createElement(
				LayoutGridCell,
				null,
				React.createElement(Card, null)
			),
			React.createElement(
				LayoutGridCell,
				null,
				'Hello'
			)
		)
	)
), document.getElementById('App'));
