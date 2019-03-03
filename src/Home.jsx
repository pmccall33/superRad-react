import React from 'react';
import  styled from 'styled-components'; 

// Components 
import User from './User.jsx';

  // a, span {
  //   text-decoration: none;
  //   color: black
  // }
  // a:hover, span:hover {
  //   text-decoration: underline;
  //   color: #4cf0ce;
  //   cursor: pointer;
  // }

const StyledDiv = styled.div`
  h1 {
    margin-left: 20px;
  }
`

function Home (props) {
  return (
		<StyledDiv>
      { props.data.loggedIn ? <User /> : <h1> HOME PAGE RENDERED </h1> }
		</StyledDiv>
	)
}

export default Home;
