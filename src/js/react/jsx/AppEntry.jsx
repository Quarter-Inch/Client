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
				<div className="mdc-form-field">
				  <div className="mdc-checkbox">
				    <input type="checkbox" id="my-checkbox" className="mdc-checkbox__native-control"/>
				    <div className="mdc-checkbox__background">
				      <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
				        <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
				      </svg>
				      <div className="mdc-checkbox__mixedmark"></div>
				    </div>
				  </div>
				  <label htmlFor="my-checkbox" id="my-checkbox-label">This is my checkbox</label>
				</div>
				<TextField id="context-input" type="text" label="Context URL" placeholder="https://" required pattern=".{8,}"/>
			</LayoutGridCell>

		</LayoutGrid>
		</main>
	</div>,
	document.getElementById('App')
);