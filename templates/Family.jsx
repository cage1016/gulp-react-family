var React = require('react');
var Male = require('./Male');
var Female = require('./Female');

module.exports = React.createClass({
	getDefaultProps: function () {
		return {females:0, males:0};
	},
	render: function () {
		var persons = [];
		var males = this.props.males,
			females = this.props.females;
		while (females--)
			persons.push(<Female />);
		while (males--)
			persons.push(<Male />);
		return (
			<div class='family'>
				<p>{persons}</p>
			</div>
		);
	}
});