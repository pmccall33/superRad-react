import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  padding: none;
  margin: 0, 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    text-decoration: none;
    color: #607D8B;
    padding: 20px;
  }
  span:hover {
    text-decoration: underline;
    color: #009688;
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  margin-left: 20px;
  span {
    color: #8BC34A;
  }
`;

const Nav = (props) => {
  return (
    <div>
      <Logo className="exception">super<span>rad</span></Logo>
      <StyledNav>
        <span onClick={props.goTo.bind(null, "home")}>home</span>
      <span onClick={props.goTo.bind(null, "game")}>play</span>
        <span onClick={props.goTo.bind(null, "about")}>about</span>
        {!props.data.loggedIn &&
          <span onClick={props.goTo.bind(null, "authorization")}>
            sign in / register
          </span>
        }
        {props.data.loggedIn &&
          <span onClick={props.logout}>logout</span>
        }
    </StyledNav>
  </div>
  )
}

export default Nav;
