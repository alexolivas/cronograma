import React from "react";
import Timeline from "./Timeline";
import Event from "./Event";

export default {
	title: "Cronograma|Timeline",
	component: Timeline,
	parameters: {
		componentSubtitle: "Display a list of events in chronological order",
	},
};

/**
 * Basic example of the `Timeline` component with default settings
 */
export const defaultTimeline = () => (
	<Timeline>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);
defaultTimeline.story = {
	name: "Default (center)"
};

/**
 * A `Timeline` component whose orientation is on the left
 */
export const orientedLeft = () => (
	<Timeline orientation="left">
		<Event timelineOrientation="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event timelineOrientation="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);

/**
 * A `Timeline` component whose orientation is on the right
 */
export const orientedRight = () => (
	<Timeline orientation="right">
		<Event timelineOrientation="right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event timelineOrientation="right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);