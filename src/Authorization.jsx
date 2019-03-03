import React, { Component } from 'react';
import  styled from 'styled-components'

const StyledAuth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;
`

class Authorization extends Component {
  constructor(props){
    super();
    let authView = props.authView
    if (props.authView !== "login") {
      authView = "reg";
    } else if (props.authView == "login") {
      // what
    }

    this.state = {
      username: "",
      password: "",
      confirmation: "",
      message: "",
      authView: authView
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  setLoginView = () => {
    if (this.state.authView !== "login") {
      this.setState({
        username: "",
        password: "",
        confirmation: "",
        message: "",
        authView: "login"
      });
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
      });
    }
  }

  submitLogin = async (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    try {
      if (!username || !password) {
        this.setState({ message: "Invalid input" });
      } else {
        const loginURI = `${process.env.REACT_APP_API_URL}/api/v1/user/login`;
        const response = await fetch((loginURI), {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            username: username,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const responseJson = await response.json();
        console.log(responseJson);

        this.setState({
          username: "",
          password: "",
          confirmation: "",
          message: "Sent"
        }, this.props.loginCallback(responseJson));
      }
    } catch(err) {
      console.log(err);
    }
  }

  submitReg = async (e) => {
    e.preventDefault();
    try {
      const username = this.state.username;
      const password = this.state.password;
      const confirmation = this.state.confirmation;

      if (!username || !password) {
        this.setState({ message: "Invalid input" });
      } else if (password !== confirmation) {
        this.setState({ message: "Password =/= confirm" });
      } else {
        const registerURI = `${process.env.REACT_APP_API_URL}/api/v1/user/register`
        const response = await fetch((registerURI), {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            username: username,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const responseJson = await response.json();
        console.log(responseJson);

        this.setState({
          username: "",
          password: "",
          confirmation: "",
          message: "Sent"
        }, this.props.registrationCallback(responseJson));
      }
    } catch(err) {
      console.log(err);
    }
  }

  renderRegistration = ({style, disabled}) => {
    return(
      <form onClick={this.setRegView} style={style}>
        <h1>Sign Up</h1>
        <p>
          <small>{this.state.authView === "reg" && this.state.message}</small>
          <br/>
        </p>
        <input
          onChange={this.handleChange}
          type="text"
          name="username"
          value={this.state.authView === "reg" ? this.state.username : ""}
          placeholder="username">
        </input>
        <br />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.authView === "reg" ? this.state.password : ""}
          placeholder="password">
        </input>
        <br />
        <input
          onChange={this.handleChange}
          type="password"
          name="confirmation"
          value={this.state.authView === "reg" ? this.state.confirmation : ""}
          placeholder="confirm password">
        </input>
        <br />
        <button disabled={disabled} onClick={this.submitReg}>Create Account</button>
      </form>
    )
  }

  renderLogin = ({style, disabled}) => {
    return(
      <form onClick={this.setLoginView} style={style}>
        <h1>Log In</h1>
        <p>
          <small>{this.state.authView === "login" && this.state.message}</small>
          <br />
        </p>
        <input
          onChange={this.handleChange}
          type="text"
          name="username"
          value={this.state.authView === "login" ? this.state.username : ""}
          placeholder="username">
        </input>
        <br/>
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.authView === "login" ? this.state.password : ""}
          placeholder="password">
        </input>
        <br />
        <button disabled={disabled} onClick={this.submitLogin}>Log In</button>
      </form>
    )
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
          {this.renderRegistration({ style: regStyle, disabled: regDisabled })}
          {this.renderLogin({ style: loginStyle, disabled: loginDisabled })}
        </StyledAuth>
      </div>
    )
  }
}

export default Authorization;
