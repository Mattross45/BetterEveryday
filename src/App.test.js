import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import GraphGrid from './GraphGrid/GraphGrid'

describe("App", () => {
  let appWrapper;
	beforeEach(() => {
		appWrapper = shallow(<App />);
	});

	it("renders graphGrid at first", () => {
    const GraphGrids = appWrapper.find(GraphGrid)
    expect(GraphGrids).toHaveLength(1);
  });

  it("renders the hearder", ()=>{
    const GraphGrids = appWrapper.find(<header></header>);
  })
});
