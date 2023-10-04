import React from 'react'
import styled from "@emotion/styled"
import pics from "../assets/youtube.png"

const Container = styled.div`
`
const Text = styled.div`
    margin-top:30px;
`
const Logo = styled.div`
      padding:20px;
      margin-top:40px;
   
     
`
const Hold = styled.div`
    display: flex;
    padding:40px;
`
const Img = styled.img``

const Trending:React.FC = () => {
  return (
    <Container>
        <Hold>
        <Logo>
        <Img src={pics}/>
      </Logo>
      <Text><h2>Trending</h2></Text>
      
      
        </Hold>
      
      
      


    </Container>
  )
}

export default Trending