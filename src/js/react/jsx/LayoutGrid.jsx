var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
        return(
			<div className="mdc-layout-grid">
				<div className="mdc-layout-grid__inner">
					{this.props.children}
				</div>
			</div>
        );
    }
});