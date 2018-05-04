import React, { Component } from 'react';

class Search extends Component {

//under return
//on form submit, run handleSubmit function in SearchContainer
//set value to property of query in setState in SearchContainer
//on change to form, run handleChange function in SearchContainer

	render() {
		return (
      <div>
      <h3>Hope you enjoy your giphys!</h3>
  			<form onSubmit={this.props.handleSubmit}>
  				<input type="text"
  					value={this.props.query}
  					onChange={this.props.handleChange} />
  	      <input type="submit" value="Search"/>
  			</form>
      </div>
		)
	}
}

export default Search;
