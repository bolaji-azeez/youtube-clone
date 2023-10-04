import React from 'react'
import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom'

interface ILink{
    text: string,
    icon: any,
    linkto: string
}
const Wrapper = styled.div`
`
const IconHold = styled.div`
display: flex;
gap: 20px;
align-items: center;
padding: 20px
`

const Span = styled.div`

`
const NavReuse:React.FC<ILink> = ({text, linkto, icon}) => {
  return (
  <Wrapper>
        <NavLink to= {linkto} style={{color:"white", textDecoration:"none"}}>
         <IconHold>
            {icon}
            <Span>{text}</Span>
        </IconHold>   
        </NavLink>
  </Wrapper>
  )
}

export default NavReuse
