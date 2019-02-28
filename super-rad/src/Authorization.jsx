import React, { Component } from 'react';
import  styled from 'styled-components'

const StyledLogin = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledSignUp = styled.div`
  display: flex;
`

class Authorization extends Component {
  render(){
    return(
      <div>
        <StyledLogin>
          <form>
            <h1>Log In</h1>
            <input type="text"></input>
            <input type="password"></input>
          </form>
        </StyledLogin>
        <StyledSignUp>
          <form>
            <h1>Sign Up</h1>
            <input type="text"></input>
            <input type="password"></input>
          </form>
        </StyledSignUp>
      </div>
    )
  }
}

export default Authorization;
