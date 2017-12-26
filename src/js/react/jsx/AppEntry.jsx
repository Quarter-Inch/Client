var React = require('react');
var ReactDOM = require('react-dom');


var HeaderToolbar = require('./HeaderToolbar.js');
var Drawer = require('./Drawer.js');
var Card = require('./Card.js');
var LayoutGrid = require('./LayoutGrid.js');
var LayoutGridCell = require('./LayoutGridCell.js');
var TextField = require('./TextField.js');

// https://material.io/components/
ReactDOM.render(
	<div>
		<HeaderToolbar img="https://placehold.jp/150x150.png" adjust=".toolbar-fixed-adjust"/>
		<Drawer />
		<main className="toolbar-fixed-adjust">
		<LayoutGrid>
			<LayoutGridCell><Card img="https://placehold.jp/150x150.png" /></LayoutGridCell>
			<LayoutGridCell><Card /></LayoutGridCell>
			<LayoutGridCell>
				<TextField id="context-input" type="text" label="Context URL" placeholder="https://" required pattern=".{8,}"/>
			</LayoutGridCell>

		</LayoutGrid>
		</main>
	</div>,
	document.getElementById('App')
);