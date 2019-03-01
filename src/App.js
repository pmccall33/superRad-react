import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Authorization from './Authorization.jsx';
import styled from 'styled-components'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Authorization />
        <Footer />
      </div>
    );
  }
}

export default App;
