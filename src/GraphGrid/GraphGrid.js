import React, { Component } from "react";
import "./GraphGrid.css";
import LineGraph from "./Graphs/LineGraph";
import ButtonBar from "./ButtonBar/ButtonBar";
import {transformDataFromListToChart} from "../util";

const transformRate = 0.01;

const dataList = [1];

const data = [
	{
		id: "push-ups",
		color: "hsl(179, 70%, 50%)",
		data: transformDataFromListToChart(dataList),
	},
];

const customState = { dataList: dataList, data: data };

class GraphGrid extends Component {
	constructor(props) {
		super(props);
		this.state = customState;
		this.addADay = this.addADay.bind(this);
	}

	addADay = () => {
		this.state.dataList.push(0)
	};

	render() {
		return (
			<div>
				<ButtonBar onClick={this.addADay} />
				<LineGraph data={this.state.data} />
			</div>
		);
	}
}

export default GraphGrid;
