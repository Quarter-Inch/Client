var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    getInitialState: function() {
        return {
            pollId : 0,
            toolbar : null
        }
    },
    componentDidMount: function(){
        // DOM に追加されたとき
        var self = this;
        this.setState({
            pollId : setInterval(function() {
                var pos = getComputedStyle(document.querySelector('.mdc-toolbar')).position;
                if (pos === 'fixed' || pos === 'relative') {
                    self.init();
                    clearInterval(self.state.pollId);
                }
            }, 250),
            toolbar : mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'))
        });
        this.init();
    },
    init:function(){
        if(this.props.adjust && this.state.toolbar){
            this.state.toolbar.fixedAdjustElement = document.querySelector(this.props.adjust);
        }
    },
	render: function() {
        var style=null;
        if(this.props.img){
            style = {
                backgroundImage: 'url("' + this.props.img + '")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center center'
            }
        }
		return(
			<header className="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior" style={style}>
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
    