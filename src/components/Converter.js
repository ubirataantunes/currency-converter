import React, { Component } from 'react'
import './Converter.css'

export default class Converter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currencyA_value: '',
			currencyB_value: 0
		}

		this.convert = this.convert.bind(this);
	}

	convert() {

		var myHeaders = new Headers();
		myHeaders.append("apikey", "kb5tFFespGQB0UrubscF3iWop9NsiOiC");

		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders
		};

		let currency = `to=${this.props.currencyA}&from=${this.props.currencyB}`;
		let url = `https://api.apilayer.com/fixer/convert?${currency}&amount=${this.state.currencyA_value}`

		fetch(url, requestOptions)
			.then(res => res.json())
			.then(res => {
				let valueRes = res.result;
				let currencyB_value = (parseFloat(this.state.currencyA_value) * valueRes).toFixed(2);
				this.setState({ currencyB_value });
			})
	}

	render() {
		return (
			<div className="converter">
				<h2>{this.props.currencyA} from {this.props.currencyB}</h2>
				<input type="number" onChange={(e) => { this.setState({ currencyA_value: e.target.value }) }}></input>
				<input type="button" value="Convert" onClick={this.convert}></input>
				<h2>{this.state.currencyB_value}</h2>
			</div>
		)
	}
}
