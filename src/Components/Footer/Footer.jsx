import React from "react";
import "./Footer.css";
import footerImg from "../../assets/images/footerImg.png";
import { CommonBtn } from '../CommonButton/CommonBtn'
import { Link } from "react-router";

const Footer = () => {
  return (
    <section>
      <div className="MainFooter">
        <div className="container">
          {/* ---------------------------- Row 1 --------------------------------- */}
          <div className="footerRow1">
            <div className='footerRow1Child' >
            <img src={footerImg} alt="Ring" />
            <div className="footerRow1Txt">
              <h2 className="Title">Stay in touch?</h2>
              <p>
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
              <CommonBtn btnContent={'Subscribe'} btnColors={'bg-brand-Color text-[#fff]'}/>
            </div>
            </div>
          </div>
          {/* --------------------------------- Row 2 -------------------------------------- */}
          <div className="footerRow2">

            <div className="footerRow2SingCard">
              <h4>Product</h4>
              <div className='footerMenu ' >
                <Link to=''>Privacy Policy</Link>
                <Link to=''>Terms of Service</Link>
                <Link to=''>FAQ</Link>
              </div>
            </div>

            <div className="footerRow2SingCard">
              <h4>Resources</h4>
              <div className='footerMenu ' >
                <Link to=''>Documentation</Link>
                <Link to=''>Case Studies</Link>
              </div>
            </div>

            <div className="footerRow2SingCard">
              <h4>Company</h4>
              <div className='footerMenu ' >
                <Link to=''>About Us</Link>
                <Link to=''>Contact Us</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
