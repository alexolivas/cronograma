import React from "react";
import Timeline from "./Timeline";
import Event from "./Event";

export default { title: "Timeline" };

/**
 * Basic example of the react timeline
 */
export const basic = () => (
	<Timeline>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);

/**
 * A timeline with all the events on one side
 */
export const oneSide = () => (
	<Timeline>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
		<Event>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
		</Event>
	</Timeline>
);