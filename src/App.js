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
      // userId: "",
      admin: false,
      pathId: "",
      page: "home",
      clickedImages: [],
      authView: "reg"  // --> "reg" -- displays SIGN UP, "login" -- displays LOG IN
    }
  }

  setLogin = ({username}) => {
    this.setState({ username, loggedIn: true });
  }

  goTo = (destination) => {
    this.setState({ page: destination });
  }

  registrationCallback = (data) => {
    console.log("Register function fired! data: ");
    console.log(data);
    this.setLogin(data);
  }

  loginCallback = (data) => {
    console.log("Login function fired! data: ");
    console.log(data);
    this.setLogin(data);
  }

  setAuthView = (authView) => {
    // acceptable inputs: "reg", "login"
    this.setState({ authView: authView });
  }

  // need to communicate w/ database; if no imageId is supplied, default value is null,
  // which should get totally random images for initial layout
  render() {
    const {loggedIn} = this.state;
    return (
      <div className="App">
        <Nav />
        {loggedIn && <Content />}
        {!loggedIn &&
          <Authorization
            authView={this.state.authView}
            registrationCallback={this.registrationCallback}
            loginCallback={this.loginCallback}
          />}
        <Footer />
      </div>
    );
  }
}

export default App;
