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
		expect(state.dataList).toBeDefined();
	});

	it("passes down data to graph as prop", () => {
		const state = gridWrapper.state();
		const graphs = gridWrapper.find(LineGraph);
		const dataState = state.data;
		expect(graphs.props().data).toBeDefined();
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

	it("preps data for chart when prepData is called", () => {
		const dataList = [1, 2.6, 6, -12.7];
		const instance = gridWrapper.instance();
		const prepedData = instance.prepData(dataList);
		expect(prepedData.isArray);
		expect(prepedData[0].id).toBeDefined();
		expect(prepedData[0].color).toBeDefined();
		expect(prepedData[0].data).toBeDefined();
	});

	describe("getDataFromUserAndName", () => {
		it("fetches data from server when server returns a successful response", () => {
		
		});
	});
});
