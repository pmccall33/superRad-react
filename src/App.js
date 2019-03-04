import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
`

const ContentContainer = styled.div`
  flex-grow: 2;
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
      firstLoad: true,
      pathId: "",
      page: "home",  // --> "home", "authorization", "user", "game", "about"
      sessionImageIds: [],
      currentImages: [],
      currentPathImages: []
    }
  }
  setLogin = ({username}) => {
    this.setState({ username, loggedIn: true });
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
      message: `Logged in as ${username}`,
      currentPathImages: []
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
          page: "authorization",
          currentImages: [],
          currentPathImages: []
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
  getImages = async () => {
     try{
      if (this.state.currentImages.length === 0) {
       const imageURI = `${process.env.REACT_APP_API_URL}/api/v1/image/random/4`
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

       this.setState({
        page: "game",
        message: "",
        currentImages: newImages,
        firstLoad: false
       })
      } else {
        this.setState({
          message: "",
          page: "game",
          firstLoad: false
        })
      }
    } catch (err) {

      console.log(err);

      this.setState({
        message: "Failed to load game",
        page: "home"
      })
    }
  }
  setCurrentImages = (imageArray, selectedImageId, selectedImageUrl) => {
    
    let currentPath = this.state.currentPathImages;

    if (this.state.loggedIn) {
      const newImage = ({id: selectedImageId, url: selectedImageUrl})
      currentPath.push(newImage);    
    }

    if (!selectedImageId || !selectedImageUrl) {
      currentPath = []
    }

    this.setState({
      currentImages: imageArray,
      currentPathImages: currentPath
    })
  }
  render() {
    console.log("APP STATE: ", this.state)

    return (
      <AppContainer className="App">
        <Nav data={this.state}
          goTo={this.goTo}
          logout={this.logout}
        />
        <ContentContainer>
          <StyledDiv>
            {this.state.message && <span className="shift">{this.state.message}</span>}
            {!this.state.message && this.state.loggedIn ?
              <span className="shift">user: {this.state.username}</span>
            :
              <span>&nbsp;</span>
            }
          </StyledDiv>
          {this.state.page === "authorization" &&
            <Authorization
              data={this.state}
              register={this.register}
              login={this.login}
            />
          }
          {this.state.page === "home" && <Home data={this.state} />}
          {this.state.page === "game" && <Game data={this.state} getImages={this.getImages} setCurrentImages={this.setCurrentImages} />}
          {this.state.page === "about" && <About />}
        </ContentContainer>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
