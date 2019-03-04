import React, { Component } from 'react';
import  styled from 'styled-components';

// Components:
import Content from './Content.jsx';

const StyledDiv = styled.div`
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #607D8B;
	}
	span {
		text-decoration: none;
		color: black;
		display: block;
	}
	span:hover {
		text-decoration: underline;
		color: #4cf0ce;
		cursor: pointer;
	}
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
	getSelectedImages = async (imageId, imageUrl) => {

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
				console.log("response: ");
				console.log(responseJson);
				await this.newLayout(imageId, imageUrl);
				return
			}

			let newImages = [];

			responseJson.image_arr.forEach( (image) => {
				newImages.push({id: image.id, url: image.image_url})
			})


			if (newImages.length < 4) {
				const additionalImages = await this.getNewRandomImages(4 - newImages.length)
				newImages = newImages.concat(additionalImages);
			}

			this.setImages(newImages, imageId, imageUrl)

		} catch (err) {
			console.log(err);
			this.newLayout(imageId, imageUrl);
		}
	}
	setImages = (imageArray, selectedId, selectedUrl) => {

		while (imageArray.length > 4) {
			imageArray.pop()
		}

		this.setState({
			images: imageArray
		})

		this.props.setCurrentImages(imageArray, selectedId, selectedUrl)

		// this.setState({
		// 	images: imageArray
		// })
	}
	newLayout = async (imageId, imageUrl) => {
		try {
			const newLayout = await this.getNewRandomImages(4);
			this.setImages(newLayout, imageId, imageUrl);
		} catch (err) {
			console.log(err);
		}
	}
	getNewRandomImages = async (num) => {
		try {

			const imageURI = `${process.env.REACT_APP_API_URL}/api/v1/image/random/${num}`
			const response = await fetch((imageURI), {
				credentials: 'include',
				headers: {
				'Content-Type': 'application/json'
				}
			});

			const responseJson = await response.json();

			if (responseJson.status !== "good" || !responseJson.success) {
				throw new Error("Failed to Load Page");
			}

			console.log(responseJson)
			const newRandomImages = [];

			responseJson.rand_image_arr.forEach( (image) => {
				newRandomImages.push({id: image.id, url: image.image_url})
			})

			return newRandomImages

		} catch (err) {
			console.log(err);
		}
	}
	render(){

		let word = "Randomize"

		if (this.state.loggedIn) {
			word = "Reset Path"
		}

		return (
			<StyledDiv>
				<div className="center">
					<span onClick={this.newLayout}> {word} </span>
				</div>
				<Content images={this.state.images} getSelectedImages={this.getSelectedImages} />
			</StyledDiv>
		)
	}
}

export default Game;
