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
});

describe("when passed down a prop", () => {
	let wrapper;
	let spy;

	beforeAll(() => {
		spy = jest.fn();
		const onClick = spy;
		wrapper = shallow(<ButtonBar onClick={spy} />);
	});

	it("prop onClick called when .goodDay is pressed", () => {
		const goodButton = wrapper.find(".goodDay");
		spy.mockClear();
		expect(spy).not.toHaveBeenCalled();
		goodButton.simulate("click");
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(true);
	});

	it("prop onClick called when .badDay is pressed", () => {
		const badButton = wrapper.find(".badDay");
		spy.mockClear();
		expect(spy).not.toHaveBeenCalled();
		badButton.simulate("click");
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(false);
	});
});
