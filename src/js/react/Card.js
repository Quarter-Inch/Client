'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'exports',

  render: function render() {
    var media = null;
    if (this.props.img) {
      var mediaStyles = {
        backgroundImage: 'url("' + this.props.img + '")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '12.313rem'
      };
      media = React.createElement('section', { style: mediaStyles });
    }
    return React.createElement(
      'div',
      { className: 'mdc-card' },
      media,
      React.createElement(
        'section',
        { className: 'mdc-card__primary' },
        React.createElement(
          'h1',
          { className: 'mdc-card__title mdc-card__title--large' },
          '\u30AB\u30FC\u30C9'
        ),
        React.createElement(
          'h2',
          { className: 'mdc-card__subtitle' },
          '\u30B5\u30D6\u30BF\u30A4\u30C8\u30EB'
        )
      ),
      React.createElement(
        'section',
        { className: 'mdc-card__supporting-text' },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ),
      React.createElement(
        'section',
        { className: 'mdc-card__actions' },
        React.createElement(
          'button',
          { className: 'mdc-button mdc-button--compact mdc-card__action' },
          'Action 1'
        ),
        React.createElement(
          'button',
          { className: 'mdc-button mdc-button--compact mdc-card__action' },
          'Action 2'
        )
      )
    );
  }
});
