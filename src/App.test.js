import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import GraphGrid from './GraphGrid/GraphGrid'
import Header from './Header/Header'

describe("App", () => {
  let appWrapper;
	beforeEach(() => {
		appWrapper = shallow(<App />);
	});

	it("renders graphGrid at first", () => {
    const GraphGrids = appWrapper.find(GraphGrid)
    expect(GraphGrids).toHaveLength(1);
  });

  it("renders the header", ()=>{
    const Headers = appWrapper.find(Header);
    expect(Headers).toHaveLength(1);
  });
});
