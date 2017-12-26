var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	render: function() {
		return(
			<header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior">
        		<div className="mdc-toolbar__row">
            		<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                		<button className="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
                		<span className="mdc-toolbar__title catalog-title">Temporary Drawer</span>
           			</section>
        		</div>
    		</header>
    	);
	}
});
    