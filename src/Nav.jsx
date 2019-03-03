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
    color: black;
    padding: 20px;
  }

  span:hover {
    text-decoration: underline;
    color: #4cf0ce;
    cursor: pointer;
  }
`
const StyledH1 = styled.h1`
margin-left: 20px;
`

const Nav = (props) => {
  return (
    <div>
        <StyledH1 className="exception">super rad </StyledH1>
      <StyledNav>
        <span onClick={props.goTo.bind(null, "home")}> home </span>
        <span onClick={props.goTo.bind(null, "game")}> game </span>
        <span onClick={props.goTo.bind(null, "about")}> about </span> 
        { !props.data.loggedIn ? <span onClick={props.goTo.bind(null, "authorization")}> sign in / register</span> : null }
        { props.data.loggedIn ? <span onClick={props.logout}> logout </span> : null }
    </StyledNav>
  </div>
  )
}

export default Nav;
