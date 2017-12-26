'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	displayName: 'exports',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'mdc-layout-grid' },
			React.createElement(
				'div',
				{ className: 'mdc-layout-grid__inner' },
				this.props.children
			)
		);
	}
});
