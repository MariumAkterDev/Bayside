import React from 'react'
import Banner from '../Components/Banner/Banner'
import ShopBy from '../Components/ShopBy/ShopBy'
import Crafted from '../Components/Crafted/Crafted'
import LatestJwel from '../Components/LatestJwel/LatestJwel'
import Review from '../Components/Review/Review'
import Services from '../Components/Services/Services'

const Home = () => {
  return (
    <>
        <Banner/>
        <ShopBy/>
        <Crafted/>
        <LatestJwel/>
        <Review/>
        <Services/>
    </>
  )
}

export default Home