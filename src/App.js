import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileInfo />
      </div>
    );
  }
}

export default App;
