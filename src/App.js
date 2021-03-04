import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';
import Description from './components/Description/Description';
import Zen from './components/Zen/Zen';
import ZenTitle from './components/ZenTitle/ZenTitle';

import './App.css';

class App extends Component {
  render() {
    return (
      // <Switch>
      //   <Route
      //     exact
      //     path="/"
      //     render={() => {
      <>
        <Navbar />
        <div className="App">
          <div></div>
          <Description />
          <ZenTitle />
          <Zen />
        </div>
      </>
      //   }}
      // />
    );
  }
}

export default App;
