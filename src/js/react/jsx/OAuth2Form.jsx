var React = require('react');
var createReactClass = require('create-react-class');
var TextField = require('./TextField.js');

module.exports = createReactClass({
    getInitialState: function() {
        return {
            clientId:this.props.clientId,
            clientSecret:this.props.clientSecret,
            authorizeEndpoint:this.props.authorizeEndpoint,
            tokenEndpoint:this.props.tokenEndpoint
        }
    },
    onClientIdChange:function(e){
        this.setState({
            clientId: e.target.value
        });
        var value = this.state;
        value['clientId'] = e.target.value;
        this.onChange(value);
    },
    onClientSecretChange:function(e){
        this.setState({
            clientSecret: e.target.value
        });
        var value = this.state;
        value['clientSecret'] = e.target.value;
        this.onChange(value);
    },
    onAuthorizeEndpointChange:function(e){
        this.setState({
            authorizeEndpoint: e.target.value
        });
        var value = this.state;
        value['authorizeEndpoint'] = e.target.value;
        this.onChange(value);
    },
    onTokenEndpointChange:function(e){
        this.setState({
            tokenEndpoint: e.target.value
        });
        var value = this.state;
        value['tokenEndpoint'] = e.target.value;
        this.onChange(value);
    },
    onChange:function(value){
        if(this.props.onChange){
            this.props.onChange(value);
        }
    },
    render: function() {
        console.log(this.state);
        return(
            <div>
                <TextField type="text" required value={this.state.clientId} onChange={this.onClientIdChange} id="client-id-input" label="クライアントID" />
                <TextField type="text" required value={this.state.clientSecret} onChange={this.onClientSecretChange} id="client-secret-input" label="クライアントシークレット" />
                <TextField type="text" required value={this.state.authorizeEndpoint} onChange={this.onAuthorizeEndpointChange} id="authorize-endpoint-input" label="認可エンドポイントURL" pattern="https://[^/]*?\.questetra\.net/oauth2/authorize" validation-msg="https://***.questetra.net/oauth2/authorize のように入力してください" />
                <TextField type="text" required value={this.state.tokenEndpoint} onChange={this.onTokenEndpointChange} id="token-endpoint-input" label="トークンエンドポイントURL" pattern="https://[^/]*?\.questetra\.net/oauth2/token" validation-msg="https://***.questetra.net/oauth2/token のように入力してください" />
            </div>
        );
    }
});