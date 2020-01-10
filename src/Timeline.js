import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Timeline.css";

export default class Timeline extends Component {

	render() {
		return (
			<div className={ classNames("cronograma-timeline") }>
				{ this.props.children }
			</div>
		);
	}
}

Timeline.propTypes = {
	children: PropTypes.node.isRequired,
};
