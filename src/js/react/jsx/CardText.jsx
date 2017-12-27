var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
      return(
        <section className="mdc-card__supporting-text">
          {this.props.children}
        </section>
      )   
  }
});