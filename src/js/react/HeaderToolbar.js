'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'exports',

    render: function render() {
        return React.createElement(
            'header',
            { className: 'mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior' },
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
