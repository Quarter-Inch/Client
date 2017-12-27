var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
      var media = null;
      if(this.props.img){
        var mediaStyles = {
            backgroundImage: 'url("' + this.props.img + '")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center center',
            height: '12.313rem',
        };
        media = (
          <section style={mediaStyles} />
        );
      }
      return(
        <div className="mdc-card">
          {media}
          {this.props.children}
        </div>
      )   
  }
});