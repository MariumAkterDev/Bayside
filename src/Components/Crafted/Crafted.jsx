import React from 'react'
import './Crafted.css'
import craftImg from '../../assets/images/craft.png'
import { CommonBtn } from '../CommonButton/CommonBtn'

const Crafted = () => {
  return (
    <section>
      <div className="MainCraft">
        <div className="container">
          <div className="cratfRow">
            <div className="CraftText">
              <h1>Hand Crafted fine pieces.</h1>
              <p>We also firmly believed that our customers deserved more choices, straightforward information and legendary service.</p>
              <div><CommonBtn btnContent={'Learn More'} btnColors={'bg-[#fff] text-brand-Color'} /></div>
            </div>
            <div className="CraftImg">
              <img src={craftImg} alt="craftImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crafted