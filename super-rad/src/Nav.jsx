import React, { Component } from 'react'
import styled from 'styled-components'



const StyledNav = styled.nav`
  text-align: left;
  display: inline;

  li {
    display: inline;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: black
  }
  a:hover {
    text-decoration: underline;
    color: #ffbb45;
  }
`
const StyledH1 = styled.h1`
text-align: left;
display: inline-flex
`

class Nav extends Component {
  render() {
    return (
      <div>
        <StyledNav>
        <ul>
          <StyledH1 class="exception">super rad</StyledH1>
          <li><a href="/">sign in</a></li>
          <li><a href="https://github.com/dakotahducharme/super-rad-react">front end repo</a></li>
          <li><a href="">back end repo</a></li>
        </ul>
      </StyledNav>
    </div>
    )
  }
}

export default Nav;
