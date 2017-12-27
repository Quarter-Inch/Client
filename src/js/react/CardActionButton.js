'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'button',
      { className: 'mdc-button mdc-button--compact mdc-card__action', onClick: this.props.onClick },
      this.props.label
    );
  }
});
