
import { shallow } from "enzyme";
import React from "react";
import Timeline from "./Timeline";

// TODO: figure out a way to make this global
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Render timeline tests", () => {
	test("display timeline", () => {
		const wrapper = shallow(<Timeline>Test</Timeline>);
		expect(wrapper.hasClass("cronograma-timeline")).toEqual(true);
	});
});