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
    if (props.authView !== "reg" || props.authView !== "login") {
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
  toggleView = (view) => {
    this.setState({
      authView: view
    })
  }
  submit = (type) => {
    if (!this.state.username || !this.state.password) {
      this.setState({
        username: "",
        password: "", 
        confirmation: "",
        message: "Invalid username and/or password"
      })
    } else if (type === "reg" && this.state.password !== this.state.confirmation) {
      this.setState({
        username: "",
        password: "", 
        confirmation: "",
        message: "Password must match 'confirm password'"
      })
    } else {
      type === "reg" ? this.props.register(this.state) : this.props.login(this.state)
    }
  }
  render(){
    return(
      <div>
        { this.state.message ? <h4>{this.state.message}</h4> : <h4> &nbsp; </h4> }
        <StyledAuth>
          <form>
            { this.state.authView === "login" ? <h1>Log In</h1> : null }
            { this.state.authView === "login" ? <button onClick={this.toggleView.bind("reg")}> Make New Account </button> : null }
            { this.state.authView === "login" ? <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="username"></input> : null}
            { this.state.authView === "login" ? <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password"></input> : null}
            { this.state.authView === "login" ? <button onClick={this.submit("login")}>Log In</button> : null }
          </form>
          <form>
            { this.state.authView === "reg" ? <h1>Sign Up</h1> : null }
            { this.state.authView === "reg" ? <button onClick={this.toggleView.bind("login")}> Log In </button>: null }
            { this.state.authView === "reg" ? <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="username"></input> : null }
            { this.state.authView === "reg" ? <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password"></input> : null }
            { this.state.authView === "reg" ? <input onChange={this.handleChange} type="password" name="confirmation" value={this.state.confirmation} placeholder="confirm password"></input> : null }
            { this.state.authView === "reg" ? <button onClick={this.submit("reg")}>Create Account</button> : null }
          </form>
        </StyledAuth>
      </div>
    )
  }
}

export default Authorization;
