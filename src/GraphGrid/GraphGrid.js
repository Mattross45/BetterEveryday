import React, { Component } from "react";
import "./GraphGrid.css";
import LineGraph from "./Graphs/LineGraph";
import ButtonBar from "./ButtonBar/ButtonBar";

const data = [];

class GraphGrid extends Component {
	state = { data: data };
	render() {
		return (
			<div>
				<ButtonBar />
				<LineGraph data={this.state.data} />
			</div>
		);
	}
}

export default GraphGrid;
