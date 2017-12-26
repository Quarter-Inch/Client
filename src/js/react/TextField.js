'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            value: this.props.value
        };
    },
    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        // DOM に追加されたとき
        if (this.props.id) {
            var c = '.mdc-text-field-' + this.props.id;
            console.log(c);
            mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field-' + this.props.id));
        }
    },
    onChange: function onChange(e) {
        this.setState({
            value: e.target.value
        });
    },
    render: function render() {
        var classes = ['mdc-text-field', 'mdc-text-field--upgraded'];

        var id;
        if (this.props.id) {
            id = this.props.id;
            classes.push('mdc-text-field-' + id);
        }

        var placeholder = null;
        var labelClasses = ['mdc-text-field__label'];
        if (this.props.placeholder) {
            placeholder = this.props.placeholder;
        }

        if (this.state.value || this.props.placeholder) {
            labelClasses.push('mdc-text-field__label--float-above');
        }

        var label = null;
        if (this.props.label) {
            label = React.createElement(
                'label',
                { htmlFor: id, className: labelClasses.join(' ') },
                this.props.label
            );
        }

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: classes.join(" ") },
                React.createElement('input', { pattern: this.props.pattern, type: this.props.type, className: 'mdc-text-field__input', id: id, 'aria-controls': id + "-validation-msg", value: this.state.value, placeholder: placeholder, required: this.props.required, onChange: this.onChange }),
                label,
                React.createElement('div', { className: 'mdc-text-field__bottom-line' })
            ),
            React.createElement(
                'p',
                { className: 'mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg', id: id + "-validation-msg" },
                'Must be at least 8 characters long'
            )
        );
    }
});
