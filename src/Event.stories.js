import React from "react";
import Timeline from "./Timeline";
import Event from "./Event";

export default {
	title: "Cronograma|Event",
	component: Event,
	parameters: {
		componentSubtitle: "Display a moment in time",
	},
};

export const defaultEvent = () => (
	<Timeline>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);
defaultEvent.story = {
	name: "Default"
};