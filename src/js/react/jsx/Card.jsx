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
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">カード</h1>
            <h2 className="mdc-card__subtitle">サブタイトル</h2>
          </section>
          <section className="mdc-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </section>
          <section className="mdc-card__actions">
            <button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
            <button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
          </section>
        </div>
      )   
  }
});