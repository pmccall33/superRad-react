import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  background-color: #ff9638;
  bottom: 100px;
  > * {
    padding: 20px;
    margin: 0;
  }
`

class Footer extends Component {
  render() {
    return (
      <div>
        <StyledFooter>
          <p>this is the footer</p>
        </StyledFooter>
      </div>
    )
  }
}

export default Footer;