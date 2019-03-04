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
  margin: 0 40px 0 20px;

`

function Home (props) {
  return (
		<StyledDiv>
      { props.data.loggedIn ? <User /> :
        <div>
         <h2 class="heading"> objective </h2>
         <p>Objective? What's an objective? No, really though, your only objective should be to enjoy seeing all sorts of weird images, cool looking gifs, and occasionally portraits of historical figures (because why not, you know?)</p>
         <p>Just click on the 'play' button, click on an image that appears and you'll be on your way to being super rad (or super bored, if you're a square.)</p>
        </div>
       }
		</StyledDiv>
	)
}

export default Home;
