'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var TextField = require('./TextField.js');

module.exports = createReactClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            clientId: "",
            clientSecret: "",
            authorizeEndpoint: "",
            tokenEndpoint: ""
        };
    },
    onClientIdChange: function onClientIdChange(e) {
        this.setState({
            clientId: e.target.value
        });
        var value = this.state;
        value['clientId'] = e.target.value;
        this.onChange(value);
    },
    onClientSecretChange: function onClientSecretChange(e) {
        this.setState({
            clientSecret: e.target.value
        });
        var value = this.state;
        value['clientSecret'] = e.target.value;
        this.onChange(value);
    },
    onAuthorizeEndpointChange: function onAuthorizeEndpointChange(e) {
        this.setState({
            authorizeEndpoint: e.target.value
        });
        var value = this.state;
        value['authorizeEndpoint'] = e.target.value;
        this.onChange(value);
    },
    onTokenEndpointChange: function onTokenEndpointChange(e) {
        this.setState({
            tokenEndpoint: e.target.value
        });
        var value = this.state;
        value['tokenEndpoint'] = e.target.value;
        this.onChange(value);
    },
    onChange: function onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(TextField, { type: 'text', required: true, value: this.state.clientId, onChange: this.onClientIdChange, id: 'client-id-input', label: '\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8ID' }),
            React.createElement(TextField, { type: 'text', required: true, value: this.state.clientSecret, onChange: this.onClientSecretChange, id: 'client-secret-input', label: '\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8' }),
            React.createElement(TextField, { type: 'text', required: true, value: this.state.authorizeEndpoint, onChange: this.onAuthorizeEndpointChange, id: 'authorize-endpoint-input', label: '\u8A8D\u53EF\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8URL', pattern: 'https://[^/]*?\\.questetra\\.net/oauth2/authorize', 'validation-msg': 'https://***.questetra.net/oauth2/authorize \u306E\u3088\u3046\u306B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044' }),
            React.createElement(TextField, { type: 'text', required: true, value: this.state.tokenEndpoint, onChange: this.onTokenEndpointChange, id: 'token-endpoint-input', label: '\u30C8\u30FC\u30AF\u30F3\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8URL', pattern: 'https://[^/]*?\\.questetra\\.net/oauth2/token', 'validation-msg': 'https://***.questetra.net/oauth2/token \u306E\u3088\u3046\u306B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044' })
        );
    }
});
