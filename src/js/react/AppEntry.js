'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');
var Card = require('./Card.js');
var CardTitle = require('./CardTitle.js');
var CardText = require('./CardText.js');
var CardAction = require('./CardAction.js');
var CardActionButton = require('./CardActionButton.js');
var LayoutGrid = require('./LayoutGrid.js');
var LayoutGridCell = require('./LayoutGridCell.js');
var Oauth2Card = require('./Oauth2Card.js');
var ControllerAuthentication = require('./Controller_Authentication.js');

// https://material.io/components/

ControllerAuthentication.Action.init();

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
				React.createElement(
					Card,
					{ img: 'https://placehold.jp/150x150.png' },
					React.createElement(CardTitle, { title: 'Title', 'sub-title': 'Sub Title' }),
					React.createElement(
						CardText,
						null,
						'CardText'
					)
				)
			),
			React.createElement(
				LayoutGridCell,
				null,
				React.createElement(Oauth2Card, null)
			)
		)
	)
), document.getElementById('App'));
