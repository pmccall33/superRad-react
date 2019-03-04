import React from 'react';
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
  main > * {
    margin-left: 20px;
  }
  a {
    text-decoration: underline;
  }
`

function About (props) {
	return (
		<StyledDiv>
      <main>
    		<h2 class="heading">about</h2>
      <p>our github links:</p>
    		<a href="https://github.com/dakotahducharme/super-rad-react" target="_blank" rel="noopener noreferrer"> front end repo </a> <br />
        	<a href="https://github.com/pmccall33/super-rad-app-sinatra" target="_blank" rel="noopener noreferrer"> back end repo </a> <br />

        <p> 'super rad' is a project put together by Dakotah Ducharme, Nathan Smith, and Peter Murray. It aims to dupe the website <a href="http://superbad.com" target="_blank" rel="noopener noreferrer">superbad</a>, an obscure, random site with gifs, images, and blocks of text that lead the user to different paths based on where the user clicks.</p>

        <p>While it's quite bare (for now, at least), super rad achieves the goal of leading the user to differnet paths based on the image or gif they clicked. We created a database to store the images and a seperate application where users can submit and tag images for the database to use. When signed in, the user can navigate through these paths, and even see more relevant images based on the tags of the image that they clicked on.</p>
      </main>
		</StyledDiv>
	)
}

export default About;
