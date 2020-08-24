import React from "react";
import GraphGrid from "./GraphGrid";
import { shallow } from "enzyme";
import LineGraph from "./Graphs/LineGraph";
import ButtonBar from "./ButtonBar/ButtonBar";

describe("GraphGrid", () => {
	let gridWrapper;

	beforeAll(() => {
		gridWrapper = shallow(<GraphGrid />);
	});

	it("renders a graph", () => {
		const graphs = gridWrapper.find(LineGraph);
		expect(graphs).toHaveLength(1);
	});

	it("renders a buttonBar", () => {
		const buttonBars = gridWrapper.find(ButtonBar);
		expect(buttonBars).toHaveLength(1);
	});

	it("has state", () => {
		const state = gridWrapper.state();
		expect(state).not.toBeNull();
		expect(state.data).toBeDefined();
		expect(state.dataList).toBeDefined();
	});

	it("passes down data state to graph as prop", () => {
		const state = gridWrapper.state();
		const graphs = gridWrapper.find(LineGraph);
		expect(graphs.props().data).toEqual(state.data);
	});

	it("passes down an onClick prop to buttonBar", () => {
		const buttonBar = gridWrapper.find(ButtonBar);
		expect(buttonBar.prop("onClick")).toBeDefined;
	});

	it("adds a element to dataList when addADay is called with true parameter", () => {
		const formerDataLength = gridWrapper.state().dataList.length;
		const instance = gridWrapper.instance();
		instance.addADay(true);
		const newDataLength = gridWrapper.state().dataList.length;
		expect(newDataLength).toEqual(formerDataLength + 1);
	});

	it("adds a element to dataList when addADay is called with false parameter", () => {
		const formerDataLength = gridWrapper.state().dataList.length;
		const instance = gridWrapper.instance();
		instance.addADay(false);
		const newDataLength = gridWrapper.state().dataList.length;
		expect(newDataLength).toEqual(formerDataLength + 1);
	});
});
