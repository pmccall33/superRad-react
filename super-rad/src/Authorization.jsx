import React, { Component } from 'react';
import  styled from 'styled-components'

const StyledAuth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;
`

class Authorization extends Component {
  render(){
    return(
      <div>
        <StyledAuth>
          <form>
            <h1>Log In</h1>
            <input type="text" placeholder="username"></input><br/>
            <input type="password" placeholder="password"></input>
          </form>
          <form>
            <h1>Sign Up</h1>
            <input type="text" placeholder="username"></input><br/>
            <input type="password" placeholder="password"></input>
          </form>
        </StyledAuth>
      </div>
    )
  }
}

export default Authorization;
