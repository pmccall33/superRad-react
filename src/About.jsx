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
`

function About (props) {
	return (
		<StyledDiv>
      <main>
    		<h1>ABOUT PAGE</h1>
    		<a href="https://github.com/dakotahducharme/super-rad-react" target="_blank" rel="noopener noreferrer"> front end repo </a> <br />
        	<a href="https://github.com/pmccall33/super-rad-app-sinatra" target="_blank" rel="noopener noreferrer"> back end repo </a> <br />

            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
		</StyledDiv>
	)
}

export default About;
