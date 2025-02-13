import React from "react";
import "./ShopBy.css";
import item1 from "../../assets/images/Item 1.png";
import item2 from "../../assets/images/Item 2.png";
import item3 from "../../assets/images/Item 3.png";
import item4 from "../../assets/images/Item 4.png";
import item5 from "../../assets/images/Item 5.png";
import { Link } from "react-router";

const ShopBy = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="shopRow">
            <h2 className="Title">Shop by Jewelry Type</h2>
            <div className="jwelaryCards">
              <div className="shopSingleCard">
                <img src={item1} alt="Jwelary" />
                <Link to="">Earrings</Link>
              </div>
              <div className="shopSingleCard">
                <img src={item2} alt="Jwelary" />
                <Link to="">necklaces</Link>
              </div>
              <div className="shopSingleCard">
                <img src={item3} alt="Jwelary" />
                <Link to="">bracelets</Link>
              </div>
              <div className="shopSingleCard">
                <img src={item4} alt="Jwelary" />
                <Link to="">all Rings</Link>
              </div>
              <div className="shopSingleCard">
                <img src={item5} alt="Jwelary" />
                <Link to="">engagement rings</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopBy;
