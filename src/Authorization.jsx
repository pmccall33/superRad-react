import React, { Component } from 'react';
import  styled from 'styled-components'

const StyledAuth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;
`


// Adding user authorization stuff: 

class Authorization extends Component {
  constructor(props){
    super();

    let authView = props.authView 
    if (props.authView !== "login") {
      authView = "reg"
    } 

    this.state = {
      username: "",
      password: "",
      confirmation: "",
      message: "",
      authView: authView
    }
  }
  handleChange = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value 
    })
  }
  setLoginView = () => {
    if (this.state.authView !== "login") {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "",
        authView: "login"
      })
    }
  }
  setRegView = () => {
    if (this.state.authView !== "reg") {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "",
        authView: "reg"
      })      
    }
  }
  submitLogin = (evt) => {
    
    evt.preventDefault();

    if (!this.state.username || !this.state.password) {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "Invalid input"        
      })
    }

    // need to write fetch logic for login HERE


  }
  submitReg = (evt) => {

    evt.preventDefault();

    if (!this.state.username || !this.state.password) {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "Invalid input"        
      })
    }

    if (this.state.password !== this.state.confirmation) {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "Password =/= confirm" 
      })
    }

    // need to write logic for create user HERE


  }
  render(){

    let loginDisabled = false;
    let regDisabled = false;
    let loginStyle = {"opacity": 1};
    let regStyle = {"opacity": 1};

    if (this.state.authView === "reg") {
      loginDisabled = true;
      loginStyle = {"opacity": 0.5};
    } else {
      regDisabled = true;
      regStyle = {"opacity": 0.5};
    }

    return(
      <div>
        <StyledAuth>
          <form onClick={this.setRegView} style={regStyle} >
            <h1>Sign Up</h1>
            { this.state.message && this.state.authView === "reg" ? <p> <small>{this.state.message}</small> <br/> </p> : <p> &nbsp; <br /> </p> }
            <input  onChange={this.handleChange} type="text" name="username" value={ this.state.authView === "reg" ? this.state.username : ""} placeholder="username"></input> <br />
            <input  onChange={this.handleChange} type="password" name="password" value={ this.state.authView === "reg" ? this.state.password : "" } placeholder="password"></input> <br />
            <input  onChange={this.handleChange} type="password" name="confirmation" value={ this.state.authView === "reg" ? this.state.confirmation : "" } placeholder="confirm password"></input> <br /> 
            <button disabled={regDisabled} onClick={this.submitReg}>Create Account</button> 
          </form>
          <form onClick={this.setLoginView} style={loginStyle}>
            <h1>Log In</h1>
            { this.state.message && this.state.authView === "login" ? <p> <small>{ this.state.authView === "login" ? this.state.message : "" } </small> <br /> </p> : <p> &nbsp; <br /> </p> }
            <input  onChange={this.handleChange} type="text" name="username" value={ this.state.authView === "login" ? this.state.username : "" } placeholder="username"></input> <br/>
            <input  onChange={this.handleChange} type="password" name="password" value={ this.state.authView === "login" ? this.state.password : "" } placeholder="password"></input> <br />
            <button disabled={loginDisabled} onClick={this.submitLogin}>Log In</button>
          </form>
        </StyledAuth>
      </div>
    )
  }
}

export default Authorization;