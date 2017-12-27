var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
      return(
        <section className="mdc-card__actions">
          {this.props.children}
        </section>
      )   
  }
});