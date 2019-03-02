import React, { Component } from 'react';
import  styled from 'styled-components'; 

// Components 
import User from './User.jsx';


const StyledDiv = styled.div`
  a, span {
    text-decoration: none;
    color: black
  }
  a:hover, span:hover {
    text-decoration: underline;
    color: #4cf0ce;
    cursor: pointer;
  }
`

function Home (props) {
  console.log(props);
  return (
		<StyledDiv>
      { props.data.loggedIn ? <User /> : <h1> HOME PAGE RENDERED </h1> }
		</StyledDiv>
	)
}

export default Home;
