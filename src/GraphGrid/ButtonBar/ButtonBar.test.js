import React from "react";
import ButtonBar from "./ButtonBar";
import { shallow } from "enzyme";

describe("<ButtonBar />", () => {
	let wrapper;

	beforeAll(() => {
		wrapper = shallow(<ButtonBar />);
	});

	it("renders 2 buttons", () => {
		const buttons = wrapper.find("button");
		expect(buttons).toHaveLength(2);
	});

	it("renders .goodDay and .badDay", () => {
		const goodDays = wrapper.find(".goodDay");
		expect(goodDays).toHaveLength(1);
		const badDays = wrapper.find(".badDay");
		expect(badDays).toHaveLength(1);
	});

	it("passes info to graph when .goodDay is pressed", () => {
		const goodDays = wrapper.find(".goodDay");
	});
});
