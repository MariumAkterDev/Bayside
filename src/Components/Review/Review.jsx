import React from 'react'
import './Review.css'
import comma from '../../assets/images/comma.png'

const Review = () => {
  return (
    <section>
      <div className="MainReview">
        <div className="container">
          <div className="reviewRow">
            <h2 className='Title' >Customer reviews</h2>
            <div className="ReviewPart">

              <div className="reviewSingleCard">
                <img src={comma} alt="comma" />
                <p>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</p>
                <div className='flex justify-center' ><h3>- Nico Jones</h3></div>
              </div>

              <div className="reviewSingleCard">
                <img src={comma} alt="comma" />
                <p>What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much.</p>
                <div className='flex justify-center' ><h3>- Tracy Willis</h3></div>
              </div>

              <div className="reviewSingleCard">
                <img src={comma} alt="comma" />
                <p>Great quality, and showed they can work through a problem and maintain excellent customer service!!</p>
                <div className='flex justify-center' ><h3>- Susana Santos</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review