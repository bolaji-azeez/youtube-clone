import React from 'react'
import styled from "@emotion/styled"
import {GiHamburgerMenu} from "react-icons/gi"
import pics1 from "../../assets/youtube.png"
import {VscSearch} from "react-icons/vsc"
import {HiMicrophone} from "react-icons/hi"
import {BiVideoPlus} from "react-icons/bi"
import {AiOutlineBell} from "react-icons/ai"


const Container = styled.div`
height: 70px;
background-color: black;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding:0px 30px;
`
const Ham = styled.div`
color: white;
display: flex;
align-items: center;
height: 50px;
`
const Box1 = styled.div`
display: flex;
justify-contents: space-between;
align-items: : center;
color: white;
gap: 20px;

`
const Box2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;


`
const Input = styled.input`
border: none;
 border-radius: 50px 0px 0px 50px ;
text-decoration: none;
height: 30px;
width: 470px;
`


const Logo = styled.img`
height: 50px;
`
const Holder2 = styled.div`
height: 40px;
width: 590px;
background-color: white;
border: 1px;
border-radius: 50px;
display: flex;
align-items: center;
gap: 50px;
color: black;
padding-right: 10px;
padding-left: 10px;

`
const Holder1 = styled.div`
height: 40px;
width: 40px;
background-color: white;
border: 1px;
border-radius: 360%;
display: flex;
justify-content: center;
align-items: center;

`
const NameHold = styled.div`
height: 30px;
width: 30px;
background-color: white;
border: 0;
border-radius: 360%;
display: flex;
justify-content: center;
align-items: center;
`
const IconHold = styled.div`
height: 30px;
width: 30px;
background-color: transparent;
border: 0;
border-radius: 360%;
display: flex;
justify-content: center;
align-items: center;
`

const Box3 = styled.div`
display: flex;
justify-contents: space-between;
align-items: : center;
color: white;
gap: 20px;
`



const Navbar: React.FC = () => {
  return (
    <Container>
   <Box1>
   <Ham>
   <GiHamburgerMenu />
   </Ham>
   
   <Logo src={pics1} />  
      
   </Box1>
   <Box2>
   <Holder2>
        <VscSearch/>
        <Input type='text' placeholder='Search here' />
        <VscSearch/>
      </Holder2>
      <Holder1>
        <HiMicrophone />
      </Holder1>
   </Box2>

      <Box3>
        <IconHold>
          <BiVideoPlus />
        </IconHold>
        <IconHold>
        <AiOutlineBell />
        </IconHold>
        
          <NameHold>
            <h3>B</h3>
          </NameHold>
      </Box3>
      
    </Container>
  )
}

export default Navbar

