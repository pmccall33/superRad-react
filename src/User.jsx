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
`

const User = (props) => {
	return (
		<StyledDiv>
			<h1>USER PAGE RENDERED</h1>
		</StyledDiv>
	)
}

export default User;
