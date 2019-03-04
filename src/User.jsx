import React, { Component } from 'react';
import  styled from 'styled-components';

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
  img {
    max-width: 100px;
    max-height: 100px;
  }
  ol {
    list-style: none;
  }
`

class User extends Component {
	constructor(props){
    super();
    this.state = {
      admin: props.data.admin,
      currentImages: props.data.currentImages,
      firstLoad: props.data.firstLoad,
      userId: props.data.userId,
      username: props.data.username,
      currentPathImages: props.data.currentPathImages
    }
  }
  render(){
    console.log("USER PROPS: ", this.props);

    let pathImages = <h4> No path — play the game for a while! </h4>

    if (this.state.currentPathImages && this.state.currentPathImages.length > 0) {
      pathImages = this.state.currentPathImages.map( (image, i) => {
        return (<li key={i}>
            <img alt="ur path" src={image.url} id={image.id} />
          </li>)
      })
    }

    return (
  		<StyledDiv>
  			<h1>{this.state.username}'s page</h1>
        <h3> Current path: </h3>
        <ol>
          { pathImages }
        </ol>
  		</StyledDiv>
  	)
  }
}


export default User;
