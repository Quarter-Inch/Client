var React = require('react');
var ReactDOM = require('react-dom');


var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');
var Card = require('./Card.js');
var CardTitle = require('./CardTitle.js');
var CardText = require('./CardText.js');
var CardAction = require('./CardAction.js');
var CardActionButton = require('./CardActionButton.js');
var LayoutGrid = require('./LayoutGrid.js');
var LayoutGridCell = require('./LayoutGridCell.js');
var Oauth2Card = require('./Oauth2Card.js');
var ControllerAuthentication = require('./Controller_Authentication.js');

// https://material.io/components/

ControllerAuthentication.Action.init();


ReactDOM.render(
	<div>
		<HeaderToolbar img="https://placehold.jp/150x150.png" adjust=".toolbar-fixed-adjust"/>
		<Drawer />
		<main className="toolbar-fixed-adjust">
		<LayoutGrid>
			<LayoutGridCell>
				<Card img="https://placehold.jp/150x150.png">
					<CardTitle title="Title" sub-title="Sub Title"/>
					<CardText>
						CardText
					</CardText>
				</Card>
			</LayoutGridCell>
			<LayoutGridCell>
				<Oauth2Card />
			</LayoutGridCell>
		</LayoutGrid>
		</main>
	</div>,
	document.getElementById('App')
);