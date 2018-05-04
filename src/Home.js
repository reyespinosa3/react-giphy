import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import './Home.css';

// query={""} set prop for SearchContainer

class Home extends Component{
  render(){
    return (
      <div className="Main-Div">
        <h1>Welcome to Search for Giphys Reach App</h1>
        <h2>Enter search criteria and press submit to begin</h2>
      <SearchContainer query={""}/>
      </div>
    )
  }
}

export default Home;
