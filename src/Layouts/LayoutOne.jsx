import React from 'react'
import Nav from '../Components/Nav/Nav'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import FooterBtm from '../Components/FooterBtm/FooterBtm'

const LayoutOne = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
        <FooterBtm/>
    </>
  )
}

export default LayoutOne