import React from 'react'
import './FooterBtm.css'
import { FaInstagram, FaYelp, FaPinterestP   } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router';


const FooterBtm = () => {
  return (
    <section>
        <div className="MainFooterBtm">
            <div className='w-full h-[1px] bg-[#929FA8] ' ></div>
            <div className="container">
                <div className="footerBtmRow">
                    <p>© Blue Diamond Jewelry™  2021</p>
                     <div className="socials">
                        <Link className="icon"><FaFacebookF /></Link>
                        <Link className="icon"><FaInstagram /></Link>
                        <Link className="icon"><FaPinterestP /></Link>
                        <Link className="icon"><FaYelp  /></Link>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterBtm