var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
      var subTitle = null;
      if(this.props['sub-title']){
        subTitle = (
          <h2 className="mdc-card__subtitle">{this.props['sub-title']}</h2>
        );
      }
      return(
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{this.props.title}</h1>
          {subTitle}
        </section>
      )   
  }
});