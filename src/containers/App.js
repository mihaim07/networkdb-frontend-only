import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import './App.css';

import { database } from '../database.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <SearchBox />
        {/* <Filters /> */}
        <Scroll> 
          <CardList database={database}/>
        </Scroll>  
      </div>
    );
  }
}

export default App;
