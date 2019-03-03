import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
  text-align: center;
  margin-bottom: 200px;
`

 class Content extends React.Component {
   state = {
     image: null
   }

   componentDidMount = () => {
     this.getImage()
   }

   getImage = async () => {
     try{
       const imageURI = `${process.env.REACT_APP_API_URL}/api/v1/image/random`
       const response = await fetch((imageURI), {
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         }
       });
       const responseJson = await response.json();
       // this.setState(image)
       console.log(responseJson);
     }catch(err){
       return err;
     }
   }
   render() {
     return(
       <StyledContent></StyledContent>
     )
   }
 }

export default Content;
