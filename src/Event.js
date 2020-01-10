import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Event.scss";

export default class Event extends Component {
	render() {
		const orientationClass = this.props.right ? "right-event" : "left-event";
		return (
			<div className={ classNames("event-container", orientationClass) }>
				<div className="event-body">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Event.propTypes = {
	left: PropTypes.bool,
	right: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Event.defaultProps = {
	left: true,
	right: false,
};