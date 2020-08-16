import React from "react";
import ButtonBar from "./ButtonBar";
import { shallow } from "enzyme";

describe("<ButtonBar />", () => {
    let wrapper;

    beforeAll(()=>{
        wrapper = shallow(<ButtonBar />)
    })
    
    it("renders 2 buttons", () => {
        const buttons = wrapper.find('button')
        expect(buttons).toHaveLength(2)
    });
});
