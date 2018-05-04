import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import './Home.css';

class Home extends Component{
  render(){
    return (
      <div>
        <h1>This is the Giphy Lab Home Page</h1>
      <SearchContainer query={""}/>
      </div>
    )
  }
}

export default Home;
