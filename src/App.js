import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Circles from './components/Circles/Circles';
import Footer from './components/Footer/Footer';
import Divider from './components/Divider/Divider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Header />
          <ProfileInfo />
          <Divider />
          <Circles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
