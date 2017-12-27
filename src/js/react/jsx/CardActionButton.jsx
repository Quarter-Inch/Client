var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
      return(
        <button className="mdc-button mdc-button--compact mdc-card__action" onClick={this.props.onClick}>{this.props.label}</button>
      )   
  }
});
