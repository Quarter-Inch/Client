'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'exports',

  render: function render() {
    var subTitle = null;
    if (this.props['sub-title']) {
      subTitle = React.createElement(
        'h2',
        { className: 'mdc-card__subtitle' },
        this.props['sub-title']
      );
    }
    return React.createElement(
      'section',
      { className: 'mdc-card__primary' },
      React.createElement(
        'h1',
        { className: 'mdc-card__title mdc-card__title--large' },
        this.props.title
      ),
      subTitle
    );
  }
});
