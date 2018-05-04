import React, { Component } from 'react';

class Search extends Component {

	render() {
		return (
      <div>
      <h1>This is the Giphy Lab Search Page</h1>
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
