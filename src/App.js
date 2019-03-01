import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Authorization from './Authorization.jsx';
import styled from 'styled-components'

// need this to be smart, putting in some stuff we might want:

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
      userId: "",
      admin: false,
      pathId: "",
      page: "home",
      clickedImages: [],
      authView: "reg"  // --> "reg" -- displays SIGN UP, "login" -- displays LOG IN
    }
  }
  goTo = (destination) => {
    this.setState({
      page: destination
    })
  }
  register = (formData) => {
    console.log("Register function fired! formData: ")
    console.log(formData)
  }
  login = (formData) => {
    console.log("Login function fired! formData: ")
    console.log(formData)
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
        <Nav />
        <Authorization authView={this.state.authView} register={this.register} login={this.login} />
        <Footer />
      </div>
    );
  }
}

export default App;
