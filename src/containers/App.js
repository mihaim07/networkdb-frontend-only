import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import CardList from '../components/CardList/CardList';
// import Searchbox from './components/Searchbox';
// import Scroll from './components/Scroll';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        {/* <Searchbox />
        <Filters />
        <Scroll> */}
          <CardList />
        {/* </Scroll>   */}
      </div>
    );
  }
}

export default App;
