import React, { Component } from 'react';
import  styled from 'styled-components'; 

// Components: 
import Content from './Content.jsx';


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

class Game extends Component {
	constructor(props){
		super();
		this.state = {
			loggedIn: props.loggedIn,
			username: props.username,
			userId: props.userId
		}
	}
	render(){
		return (
			<StyledDiv>
				<h1>GAME PAGE RENDERED</h1>
				<Content />
			</StyledDiv>
		)
	}
}

export default Game;
