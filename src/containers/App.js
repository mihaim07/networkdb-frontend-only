import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import './App.css';
import { database } from '../database2.js';



class App extends Component {
constructor() {
  super()
  this.state = {
    database: database,
    searchfield: ''
  }
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value });
}


  render() {
    const { database, searchfield } = this.state;
    const filteredDatabase = database.filter(data =>{
      return ((data.NodeName.toLowerCase()).concat([' '] , data.NodeName.toLowerCase())).includes(searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <Logo />
        <SearchBox searchChange={ this.onSearchChange } />
        {/* <Filters /> */}
        <Scroll> 
          <CardList database={filteredDatabase}/>
        </Scroll>  
      </div>
    );
  }
}

export default App;
