var React = require('react');
var createReactClass = require('create-react-class');

var Card = require('./Card.js');
var CardTitle = require('./CardTitle.js');
var CardText = require('./CardText.js');
var CardAction = require('./CardAction.js');
var CardActionButton = require('./CardActionButton.js');
var OAuth2Form = require('./OAuth2Form.js');
var ControllerAuthentication = require('./Controller_Authentication.js');

module.exports = createReactClass({
  getInitialState: function() {
    var value = ControllerAuthentication.Store.getAuthenticationValue();
    //console.log(15, value);
      return {
          clientId:value.clientId,
          clientSecret:value.clientSecret,
          authorizeEndpoint:value.authorizeEndpoint,
          tokenEndpoint:value.tokenEndpoint,
          scope:"any"
      }
  },
  onChange:function(value){
    this.setState({
          clientId:value.clientId,
          clientSecret:value.clientSecret,
          authorizeEndpoint:value.authorizeEndpoint,
          tokenEndpoint:value.tokenEndpoint
    });
  },
  onClickSubmitBtn:function(){
    ControllerAuthentication.Action.authentication(this.state.clientId, this.state.clientSecret, this.state.authorizeEndpoint, this.state.tokenEndpoint, this.state.scope);
  },
  render: function() {

      return(
        <Card img="https://placehold.jp/150x150.png">
          <CardTitle title="Title" sub-title="Sub Title"/>
          <CardText>
            <OAuth2Form onChange={this.onChange} clientId={this.state.clientId} clientSecret={this.state.clientSecret} authorizeEndpoint={this.state.authorizeEndpoint} tokenEndpoint={this.state.tokenEndpoint}/>
          </CardText>
          <CardAction>
            <CardActionButton onClick={this.onClickSubmitBtn} label="認証" />
          </CardAction>
        </Card>
      );
  }
});