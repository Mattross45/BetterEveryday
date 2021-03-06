import React, { Component } from "react";
import "./GraphGrid.css";
import LineGraph from "./Graphs/LineGraph";
import ButtonBar from "./ButtonBar/ButtonBar";
import {
	transformDataFromListToChart,
	newDay,
	getGraphFromUserAndName,
} from "../util";

const transformRate = 0.1;

const dataList = [1];
const userId = "123";
const graphName = "motivation";

const customState = {
	dataList: [],
	userId: "",
	graphName: "",
	color:""
};

class GraphGrid extends Component {
	constructor(props) {
		super(props);
		this.state = customState;
		this.addADay = this.addADay.bind(this);
		this.prepData = this.prepData.bind(this);
	}

	addADay = (positiveOrNot) => {
		this.setState({
			dataList: newDay(this.state.dataList, positiveOrNot, transformRate),
		});
	};

	prepData = (dataList) => {
		return [
			{
				id: "push-ups",
				color: "hsl(179, 70%, 50%)",
				data: transformDataFromListToChart(dataList),
			},
		];
	};

	async getDataFromUserAndName(userId, graphName) {
		const response = await getGraphFromUserAndName(userId, graphName);
		this.setState(response)
	}

	render() {
		return (
			<div>
				<ButtonBar onClick={this.addADay} />
				<LineGraph data={this.prepData(this.state.dataList)} />
			</div>
		);
	}
}

export default GraphGrid;
