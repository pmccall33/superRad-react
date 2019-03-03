import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

// import Content from './Content.jsx';

// Components: 
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Authorization from './Authorization.jsx';
// import User from './User.jsx';
import Game from './Game.jsx';
import About from './About.jsx';


const StyledDiv = styled.div`
  .shift {
    margin-left: 20px;
  }
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      message: "",
      username: "",
      userId: "",
      admin: false,
      pathId: "",
      page: "home",  // --> "home", "authorization", "user", "game", "about"
      sessionImageIds: [],
      currentImages: []
    }
  }
  goTo = (destination) => {
    // acceptable inputs: "home", "authorization", "user", "game", "about"
    if (destination === "game") {
      this.getImages();
    } else {
      this.setState({
        page: destination,
        message: ""
      })
    }
  }
  login = (username, userId, is_admin) => {
    this.setState({
      loggedIn: true,
      username: username,
      userId: userId,
      admin: is_admin,
      page: "home",
      message: `Logged in as ${username}`
    })
  }
  logout = async () => {

    try {
      const response = await fetch((`${process.env.REACT_APP_API_URL}/api/v1/user/logout`), {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseJson = await response.json();

      const userLoggedOut = this.state.username;

      if (responseJson.status !== "good" || !responseJson.success) {
        console.log("ERROR: connected w/ server, but failed to log out user")
        this.setState({
          message: `Failed to log out user ${userLoggedOut}`
        })
      } else {
        this.setState({
          loggedIn: false,
          username: "",
          userId: "",
          admin: false,
          message: `Logged out user ${userLoggedOut}`,
          page: "authorization"
        })
      }

    } catch (err) {
      console.log(err)
    }
  }
  setAuthView = (authView) => {
    // acceptable inputs: "reg", "login"
    this.setState({
      authView: authView 
    })
  }
  getImages = async (imageId = null) => {
     try{
       const imageURI = `${process.env.REACT_APP_API_URL}/api/v1/image/random`
       const response = await fetch((imageURI), {
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         }
       });
       const responseJson = await response.json();

       if (responseJson.status !== "good" || !responseJson.success) {
        throw new Error("Failed to Load Page");
       }

       console.log(responseJson)
       const newImages = [];

       responseJson.rand_image_arr.forEach( (image) => {
        newImages.push({id: image.id, url: image.image_url})
       })

       newImages.push({id: responseJson.image_id, url: responseJson.image_url})

       this.setState({
        page: "game",
        currentImages: newImages
       })

    }catch(err){

      console.log(err);

      this.setState({
        message: "Failed to load game",
        page: "home"
      })
    }
  }
  render() {
    
    // console.log("APP STATE: ", this.state)

    return (
      <div className="App">
        <Nav data={this.state} goTo={this.goTo} logout={this.logout} />
        <StyledDiv>
          { this.state.message ? <span className="shift">{this.state.message}</span> : null } 
         { !this.state.message && this.state.loggedIn ? <span className="shift"> user: {this.state.username} </span> : <span> &nbsp; </span> }
        </StyledDiv>
        { this.state.page === "authorization" ? <Authorization data={this.state} register={this.register} login={this.login} /> : null }
        { this.state.page === "home" ? <Home data={this.state} /> : null }
        { this.state.page === "game" ? <Game data={this.state} getImages={this.getImages} /> : null }
        { this.state.page === "about" ? <About /> : null }
        <Footer />
      </div>
    );
  }
}

export default App;
