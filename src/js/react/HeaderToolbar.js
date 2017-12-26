'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            pollId: 0,
            toolbar: null
        };
    },
    componentDidMount: function componentDidMount() {
        // DOM に追加されたとき
        var self = this;
        this.setState({
            pollId: setInterval(function () {
                var pos = getComputedStyle(document.querySelector('.mdc-toolbar')).position;
                if (pos === 'fixed' || pos === 'relative') {
                    self.init();
                    clearInterval(self.state.pollId);
                }
            }, 250),
            toolbar: mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'))
        });
        this.init();
    },
    init: function init() {
        if (this.props.adjust && this.state.toolbar) {
            this.state.toolbar.fixedAdjustElement = document.querySelector(this.props.adjust);
        }
    },
    render: function render() {
        var style = null;
        if (this.props.img) {
            style = {
                backgroundImage: 'url("' + this.props.img + '")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            };
        }
        return React.createElement(
            'header',
            { className: 'mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior', style: style },
            React.createElement(
                'div',
                { className: 'mdc-toolbar__row' },
                React.createElement(
                    'section',
                    { className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
                    React.createElement(
                        'button',
                        { className: 'demo-menu material-icons mdc-toolbar__menu-icon' },
                        'menu'
                    ),
                    React.createElement(
                        'span',
                        { className: 'mdc-toolbar__title catalog-title' },
                        'Temporary Drawer'
                    )
                )
            )
        );
    }
});
