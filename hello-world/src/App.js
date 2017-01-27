import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<main>
					<ShoppingList owner="Craig" />
				</main>
			</div>
		);
	}
}

class ShoppingList extends React.Component {

	constructor() {
		
		super();
	
		this.state = {
			new: '',
			items: ["Apples", "Banazaz", "Cabbababages"]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}
	
	removeItem(e) {

		var i = e.target.getAttribute('data-index');
		var itemsArray = this.state.items;
		itemsArray.splice(i, 1);
		
		this.setState({ items: itemsArray });
		
		e.target.blur();		
		e.preventDefault();
	}
	
	handleChange(event) {
		this.setState({new: event.target.value});
	}
	
	handleSubmit(event) {

		var itemsArray = this.state.items;
		if(this.state.new > '') {
			itemsArray.push(this.state.new);
			
			this.setState({ new: '', items: itemsArray });
			this.textInput.value = '';
		}
		
		event.target.blur();
		event.preventDefault();
	}
	
	render() {

		var list = [];
		for(var i = 0; i < this.state.items.length; i++) {
			list.push(
				<li>
					{this.state.items[i]}
					<button onClick={this.removeItem} data-index={i}>Remove</button>
				</li>
			);
		}
		
		return (
			<form>
				<h2>Shopping list for {this.props.owner} ({this.state.items.length} items)</h2>
				<ol>{ list }</ol>
			
				<input ref={(a) => this.textInput = a} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter something..."/>
				<button onClick={this.handleSubmit}>Add item</button>
			</form>
		);
	}
}

export default App;
