'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');
var Card = require('./Card.js');
var LayoutGrid = require('./LayoutGrid.js');
var LayoutGridCell = require('./LayoutGridCell.js');
var TextField = require('./TextField.js');

// https://material.io/components/
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
				React.createElement(
					'div',
					{ className: 'mdc-form-field' },
					React.createElement(
						'div',
						{ className: 'mdc-checkbox' },
						React.createElement('input', { type: 'checkbox', id: 'my-checkbox', className: 'mdc-checkbox__native-control' }),
						React.createElement(
							'div',
							{ className: 'mdc-checkbox__background' },
							React.createElement(
								'svg',
								{ className: 'mdc-checkbox__checkmark', viewBox: '0 0 24 24' },
								React.createElement('path', { className: 'mdc-checkbox__checkmark__path', fill: 'none', stroke: 'white', d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
							),
							React.createElement('div', { className: 'mdc-checkbox__mixedmark' })
						)
					),
					React.createElement(
						'label',
						{ htmlFor: 'my-checkbox', id: 'my-checkbox-label' },
						'This is my checkbox'
					)
				),
				React.createElement(TextField, { id: 'context-input', type: 'text', label: 'Context URL', placeholder: 'https://', required: true, pattern: '.{8,}' })
			)
		)
	)
), document.getElementById('App'));
