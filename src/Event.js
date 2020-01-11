import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Event.scss";

export default class Event extends Component {
	render() {
		const { right, left, timelineOrientation } = this.props;
		const orientationLeft = timelineOrientation == "left";
		const orientationCenter = timelineOrientation == "center";
		const orientationRight = timelineOrientation == "right";
		const cssClasses = classNames({
			"event-container": true,
			"left-timeline": orientationLeft,
			"right-timeline": orientationRight,
			"right-event": orientationLeft || (orientationCenter && right),
			"left-event": orientationRight || (orientationCenter && left),
		});
		return (
			<div className={ cssClasses }>
				<div className="event-body">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Event.propTypes = {
	timelineOrientation: PropTypes.oneOf(["left", "center", "right"]), // This will be replaced by redux
	left: PropTypes.bool, // There should be validation here to prevent both being true or false at the same time
	right: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Event.defaultProps = {
	timelineOrientation: "center",
	left: true,
	right: false,
};