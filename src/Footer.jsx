import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  background-color: #8BC34A;
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
          <p>made with ♡ by Dakotah, Nathan, and Peter</p>
        </StyledFooter>
      </div>
    )
  }
}

export default Footer;
