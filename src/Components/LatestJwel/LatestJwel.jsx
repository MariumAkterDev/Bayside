import React from 'react'
import './LatestJwel.css'
import late1 from '../../assets/images/late 1.png'
import late2 from '../../assets/images/late 2.png'
import late3 from '../../assets/images/late 3.png'
import { CommonBtn } from '../CommonButton/CommonBtn'

const LatestJwel = () => {
  return (
    <section>
      <div className="MainLatest">
        <div className="container">
          <div className="LatestRow">
            <h2 className='Title' >OUR LATEST JEWELRY</h2>
            <div className="JwelImg">
              <img src={late1} alt="Jwelary" />
              <img src={late2} alt="Jwelary" />
              <img src={late3} alt="Jwelary" />
            </div>
            <div className='w-full flex justify-center' ><CommonBtn btnContent={'view gallery'} btnColors={'bg-brand-Color text-[#fff]'} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestJwel