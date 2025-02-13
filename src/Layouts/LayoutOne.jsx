import React from 'react'
import Nav from '../Components/Nav/Nav'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const LayoutOne = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutOne