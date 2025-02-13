import React from "react";
import "./Services.css";
import service1 from "../../assets/images/service 1.png";
import service2 from "../../assets/images/service 2.png";
import service3 from "../../assets/images/service 3.png";
import { Link } from "react-router";
import { CommonBtn } from '../CommonButton/CommonBtn'

const Services = () => {
  return (
    <section>
      <div className="MainSection">
        <div className="container">
          <div className="serviceRow px-[20px] lg:px-0">
            <h2 className="Title">Our Services</h2>
            <div className="serviceCards">

              <div className="serviceSingleCard">
                <img src={service1} alt="service" />
                <Link to="">Jewelry Repair</Link>
              </div>

              <div className="serviceSingleCard">
                <img src={service2} alt="service" />
                <Link to="">Ring Sizing</Link>
              </div>

              <div className="serviceSingleCard">
                <img src={service3} alt="service" />
                <Link to="">Jewelry Polishing</Link>
              </div>

            </div>
            <div className='flex justify-center'><CommonBtn btnContent={'Learn More'} btnColors={'bg-brand-Color text-[#fff]'}/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
