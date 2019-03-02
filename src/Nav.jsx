import React from 'react'
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
    color: #4cf0ce;
  }
`
const StyledH1 = styled.h1`
text-align: left;
display: inline-flex
margin-right: 800px;
`

const Nav = (props) => {

  return (
    <div>
      <StyledNav>
      <ul>
        <StyledH1 className="exception">super rad</StyledH1>
        { !props.data.loggedIn ? <li><span className="fakeLink" onClick={props.goTo.bind(null, "authorization")}> sign in / register</span></li> : null }
        { props.data.loggedIn ? <li> <span className="fakeLink" onClick={props.goTo.bind(null, "user")}> user page </span></li> : null }
        { props.data.loggedIn ? <li><span className="fakeLInk" onClick={props.logout}> logout </span></li> : null }
        <li><span className="fakeLink" onClick={props.goTo.bind(null, "home")}> home </span></li>
        <li><span className="fakeLink" onClick={props.goTo.bind(null, "game")}> game </span></li>
        <li><span className="fakeLink" onClick={props.goTo.bind(null, "about")}> about </span></li>
        <li><a href="https://github.com/dakotahducharme/super-rad-react" target="_blank"> front end repo </a></li>
        <li><a href="https://github.com/pmccall33/super-rad-app-sinatra" target="_blank"> back end repo </a></li>
      </ul>
    </StyledNav>
  </div>
  )
}

export default Nav;
