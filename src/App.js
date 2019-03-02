import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

// import Content from './Content.jsx';

// Components: 
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Authorization from './Authorization.jsx';
import User from './User.jsx';
import Game from './Game.jsx';
import About from './About.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
      userId: "",
      admin: false,
      pathId: "",
      page: "authorization",  // --> "home", "authorization", "user", "game", "about"
      sessionImageIds: [],
      currentImages: []
    }
  }
  goTo = (destination) => {
    // acceptable inputs: "home", "authorization", "user", "game", "about"
    this.setState({
      page: destination
    })
  }
  login = (username, userId, is_admin = false) => {
    this.setState({
      loggedIn: true,
      username: username,
      userId: userId,
      admin: is_admin,
      page: "user"
    })
  }
  logout = async () => {

    this.setState({
      loggedIn: false,
      username: "",
      userId: "",
      admin: false,
      page: "authorization"
    })
  }
  setAuthView = (authView) => {
    // acceptable inputs: "reg", "login"
    this.setState({
      authView: authView 
    })
  }
  getImages = (imageId = null) => {
    // need to communicate w/ database; if no imageId is supplied, default value is null, 
    // which should get totally random images for initial layout 
  }
  render() {
    
    return (
      <div className="App">
        <Nav data={this.state} goTo={this.goTo} logout={this.logout} />
        { this.state.page === "home" ? <Home data={this.state} /> : null }
        { this.state.page === "authorization" ? <Authorization data={this.state} register={this.register} login={this.login} /> : null }
        { this.state.page === "user" ? <User data={this.state} /> : null }
        { this.state.page === "game" ? <Game data={this.state} getImages={this.getImages} /> : null }
        { this.state.page === "about" ? <About /> : null }
        <Footer />
      </div>
    );
  }
}

export default App;
