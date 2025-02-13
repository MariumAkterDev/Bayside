import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/images/Banner.png'

const Banner = () => {
  return (
    <>
      <div className="mainBanner">
        <div className="container">
          <div className="bannerRow">
            <img src={BannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner