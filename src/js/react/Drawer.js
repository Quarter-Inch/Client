'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'exports',

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        // DOM に追加されたとき
        var drawerEl = document.querySelector('.mdc-temporary-drawer');
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(drawerEl);
        document.querySelector('.demo-menu').addEventListener('click', function () {
            drawer.open = true;
        });
    },
    render: function render() {
        return React.createElement(
            'aside',
            { className: 'mdc-temporary-drawer' },
            React.createElement(
                'nav',
                { className: 'mdc-temporary-drawer__drawer' },
                React.createElement(
                    'header',
                    { className: 'mdc-temporary-drawer__header' },
                    React.createElement(
                        'div',
                        { className: 'mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary' },
                        'Header here'
                    )
                ),
                React.createElement(
                    'nav',
                    { className: 'mdc-temporary-drawer__content mdc-list-group' },
                    React.createElement(
                        'div',
                        { id: 'icon-with-text-demo', className: 'mdc-list' },
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item mdc-temporary-drawer--selected', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'inbox'
                            ),
                            'Inbox'
                        ),
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'star'
                            ),
                            'Star'
                        ),
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'send'
                            ),
                            'Sent Mail'
                        ),
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'drafts'
                            ),
                            'Drafts'
                        )
                    ),
                    React.createElement('hr', { className: 'mdc-list-divider' }),
                    React.createElement(
                        'div',
                        { className: 'mdc-list' },
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'email'
                            ),
                            'All Mail'
                        ),
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'delete'
                            ),
                            'Trash'
                        ),
                        React.createElement(
                            'a',
                            { className: 'mdc-list-item', href: '#' },
                            React.createElement(
                                'i',
                                { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                                'report'
                            ),
                            'Spam'
                        )
                    )
                )
            )
        );
    }
});
