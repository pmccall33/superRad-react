import React, { Component } from 'react';
import  styled from 'styled-components'; 

// Components: 
import Content from './Content.jsx';


class Game extends Component {
	constructor(){
		super();
		this.state = {
			
		}
	}
	render(){
		return (
			<div>
				GAME RENDERED
				<Content />
			</div>
		)
	}
}

export default Game;
