import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
  text-align: center;
  margin-bottom: 200px;

  img {
    max-width: 300px;
  }
`

const Content = (props) => {
  return (
    <StyledContent>
      <img alt="game" id={props.images[0].id} src={props.images[0].url} />
    </StyledContent>
  )
}

export default Content; 
