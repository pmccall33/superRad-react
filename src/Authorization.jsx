import React, { Component } from 'react';
import  styled from 'styled-components'

const StyledAuth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;

  form {
    min-width: 150px;
  }
`

class Authorization extends Component {
  constructor(props){
    super();
    this.state = {
      username: "",
      password: "",
      confirmation: "",
      message: "",
      authView: "reg"
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
  submitLogin = async (evt) => {

    evt.preventDefault();

    try {

      if (!this.state.username || !this.state.password) {
        this.setState({
          username: "",
          password: "",
          confirmation: "",
          message: "Invalid input"
        })
      } else {

        const username = this.state.username;
        const password = this.state.password;

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


        if (responseJson.success && responseJson.status === "good") {
          this.setState({
            username: "",
            password: "",
            confirmation: "",
          })

          this.props.login(responseJson.username, responseJson.userId, responseJson.is_admin)

        } else {
          this.setState({
            username: "",
            password: "",
            confirmation: "",
            message: "Failed to log in"
          })
        }
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }
  submitReg = async (evt) => {

    evt.preventDefault();

    try {
      if (!this.state.username || !this.state.password) {
        this.setState({
          username: "",
          password: "",
          confirmation: "",
          message: "Invalid input"
        })
      } else if (this.state.password !== this.state.confirmation) {
        this.setState({
          username: "",
          password: "",
          confirmation: "",
          message: "Password =/= confirm"
        })
      } else {

          const username = this.state.username;
          const password = this.state.password;

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

          if (responseJson.success && responseJson.status === "good") {
            this.setState({
              username: "",
              password: "",
              confirmation: ""
            })

            this.props.login(responseJson.username, responseJson.userId, responseJson.is_admin);

          } else {
            this.setState({
              username: "",
              password: "",
              confirmation: "",
              message: "Registration failed"
            })
          }

      }
    } catch(err) {
      console.log(err);
    }
  }
  renderRegistration = ({style, disabled}) => {
    return(
      <form onClick={this.setRegView} style={style}>
        <h1 class="heading">Sign Up</h1>
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
        <h1 class="heading">Log In</h1>
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
