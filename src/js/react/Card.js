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
      this.props.children
    );
  }
});
