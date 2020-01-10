import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Timeline.scss";

export default class Timeline extends Component {

	// TODO: based on the orientation a css class is applied
	render() {
		return (
			<div className={ classNames("cronograma-timeline") }>
				{ this.props.children }
			</div>
		);
	}
}

Timeline.propTypes = {
	orientation: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Timeline.defaultProps = {
	orientation: "left",
};
