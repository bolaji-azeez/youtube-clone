import React from 'react'
import Navbar from '../blocks/Navbar'
import Sidebar from '../blocks/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from "@emotion/styled"

const LayoutContainer = styled.div`
margin-top: 90px;
margin-left: 220px;
`
const WeblayOut:React.FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Navbar />
      <Outlet />

    </LayoutContainer>
  )
}

export default WeblayOut;