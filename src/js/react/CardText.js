'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'section',
      { className: 'mdc-card__supporting-text' },
      this.props.children
    );
  }
});
