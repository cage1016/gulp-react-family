/** @jsx React.DOM */

var React = require('react');
var Family = require('./templates/Family');

React.renderComponent(
	<Family females={3} males={2} />,
	document.getElementById('app')
);