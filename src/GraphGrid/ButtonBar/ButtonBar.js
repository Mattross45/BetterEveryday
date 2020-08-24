import React, { Component } from "react";

class ButtonBar extends Component {
	constructor(props) {
		super(props);
		this.handleClickGood = this.handleClickGood.bind(this);
		this.handleClickBad = this.handleClickBad.bind(this);
	}

	handleClickGood() {
		this.props.onClick(true);
	}

	handleClickBad() {
		this.props.onClick(false);
	}

	render() {
		return (
			<div>
				<button className="goodDay" onClick={this.handleClickGood}>
					Good Day
				</button>
				<button className="badDay" onClick={this.handleClickBad}>
					Bad Day
				</button>
			</div>
		);
	}
}

export default ButtonBar;
