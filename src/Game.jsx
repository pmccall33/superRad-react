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
			loggedIn: props.data.loggedIn,
			username: props.data.username,
			userId: props.data.userId,
			images: props.data.currentImages,
			firstLoad: props.data.firstLoad
		}
	}
	getSelectedImages = async (imageId) => {

		try {
			const imageURI = `${process.env.REACT_APP_API_URL}/api/v1/image/${imageId}`
			const response = await fetch((imageURI), {
				credentials: 'include',
				headers: {
				'Content-Type': 'application/json'
				}
			});
			
			const responseJson = await response.json();

			if (responseJson.status !== "good" || !responseJson.success) {
				console.log("something's wrong... response: ");
				console.log(responseJson);;
				return 
			}

			console.log(responseJson)
			const newImages = [];

			responseJson.rand_image_arr.forEach( (image) => {
				newImages.push({id: image.id, url: image.image_url})
			})

			this.setState({
				images: newImages,
			})
		} catch (err) {
			console.log(err);
		}
	}
	render(){
		return (
			<StyledDiv>
				<Content images={this.state.images} getSelectedImages={this.getSelectedImages} />
			</StyledDiv>
		)
	}
}

export default Game;
