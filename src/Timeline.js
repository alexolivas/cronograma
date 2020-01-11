import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Timeline.scss";

/**
 * Use `Timeline` to create a series of events
 */
export default class Timeline extends Component {

	render() {
		const { orientation } = this.props;
		const cssClasses = classNames({
			"cronograma-timeline": true,
			"orientation-left": orientation === "left",
			"orientation-center": orientation === "center",
			"orientation-right": orientation === "right",
		});
		return (
			<div className={ cssClasses }>
				{ this.props.children }
			</div>
		);
	}
}

Timeline.propTypes = {
	orientation: PropTypes.oneOf(["left", "center", "right"]),
	children: PropTypes.node.isRequired,
};

Timeline.defaultProps = {
	orientation: "center",
};
