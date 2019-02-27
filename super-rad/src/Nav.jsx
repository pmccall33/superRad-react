import React, { Component } from 'react'
import styled from 'styled-components'


const StyledH1 = styled.h1`
text-align: left;
display: inline-flex
`

const StyledNav = styled.nav`
  text-align: right;
`

class Nav extends Component {
  render() {
    return (
      <div>
        <StyledNav>
        <ul>
          <StyledH1>super rad</StyledH1>
          <li><a href="/">sign in</a></li>
          <li><a href="/">blah</a></li>
          <li><a href="">blah</a></li>
        </ul>
      </StyledNav>
    </div>
    )
  }
}

export default Nav;
