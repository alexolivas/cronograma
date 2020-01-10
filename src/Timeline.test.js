import { shallow } from "enzyme";
import React from "react";
import Timeline from "./Timeline";

describe("Render timeline tests", () => {
	test("display timeline", () => {
		const wrapper = shallow(<Timeline>Test</Timeline>);
		expect(wrapper.hasClass("cronograma-timeline")).toEqual(true);
	});
});