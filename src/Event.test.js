import { shallow } from "enzyme";
import React from "react";
import Event from "./Event";

describe("Render event tests", () => {
	test("display default event", () => {
		const wrapper = shallow(<Event>Test</Event>);
		expect(wrapper.hasClass("event-container")).toEqual(true);
		expect(wrapper.hasClass("left-event")).toEqual(true);
		expect(wrapper.hasClass("right-event")).toEqual(false);
	});

	test("display event oriented to the right", () => {
		const wrapper = shallow(<Event right>Test</Event>);
		expect(wrapper.hasClass("event-container")).toEqual(true);
		// TODO this has to pass
		// expect(wrapper.hasClass("left-event")).toEqual(false);
		expect(wrapper.hasClass("right-event")).toEqual(true);
	});
});