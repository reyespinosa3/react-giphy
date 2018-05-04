import React, { Component } from 'react';
import Search from './Search'
import axios from 'axios';

class SearchContainer extends Component {
	constructor() {
		super();

//sets initial state of query and response to empty
		this.state = {
			query: "",
			response: []
		}
		//sets API Key for Giphy for handleSubmit function
		this.API_KEY = "liqwTWyyKUKMmS4p8aEMz1P9fROXV73i";
		//links handleChange to SearchContainer to pass down props to Search
		this.handleChange = this.handleChange.bind(this);
		//links handleSubmit to SearchContainer to pass down props to Search
		this.handleSubmit = this.handleSubmit.bind(this);

	}

// sets the state of query to the value in the search form
	handleChange(e) {
		this.setState({
			query: e.target.value,
		});
	}

// sets the URL path to use when form is submitted
// stores results from query in response array
	handleSubmit(e) {
		e.preventDefault();
		const rootUrl = "http://api.giphy.com/v1/gifs/search?q="
		let response = axios.get(rootUrl+ this.state.query + "&api_key=" + this.API_KEY + "&limit=5");
		let self = this;

		response.then(function(data){
			self.setState({
				response: data.data.data
			});
		});
	}


//under render()
//if response has data, map array using Key of index in array and
//source equal giphys and show small giphys

//under return
//update query to equal state of query, initially "", then input of form
//on submit run handleSubmit function
//on change run handleChange function
//show results in <div></div>

	render() {
		let results;
		if (this.state.response) {
      results = this.state.response.map((item,index) =>
			  <img key={index} src={item.images.fixed_height_small.url} alt="results" />
			)
    }

		return (
			<div className="App-header">
				<Search query={this.state.query}
						handleSubmit={(e) => {this.handleSubmit(e)}}
						handleChange={(e) => {this.handleChange(e)}}/>
				<br />
				<div>{ results }</div>
			</div>
		)
	}
}

export default SearchContainer;
