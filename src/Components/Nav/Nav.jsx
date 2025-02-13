import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaHome, FaShoppingBag   } from "react-icons/fa";
import { MdMiscellaneousServices, MdRoundaboutRight, MdContacts   } from "react-icons/md";


const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="mainNav">
      <div className="container">
        <div className="navRow">
          {/* ----------------------------------Mobile Nav Menu Starts -------------------------- */}

          <div className="MobileNavMain sm:hidden">
            <div className="MobileNavMain">
              <div
                className={`navMobBar ${
                  show ? "bg-[#002e6966]" : "bg-[#002e6923]"
                }`}
              >
                <FaBars
                  className="mobBarIcon "
                  onClick={() => setShow(!show)}
                />
                {show && (
                  <div className={`mobMenu`} onClick={() => setShow(false)}>
                    <ul>
                      <li>
                        <div className="menuIcon">
                          <FaHome/>
                        <Link to="#">Home</Link>
                        </div>
                      </li>
                      <li>
                        <div className="menuIcon">
                          <FaShoppingBag/>
                        <Link to="#">Shop</Link>
                        </div>
                      </li>
                      <li>
                        <div className="menuIcon">
                          <MdMiscellaneousServices/>
                        <Link to="#">Services</Link>
                        </div>
                      </li>
                      <li>
                        <div className="menuIcon">
                          <MdRoundaboutRight/>
                        <Link to="#">About</Link>
                        </div>
                      </li>
                      <li>
                        <div className="menuIcon">
                          <MdContacts/>
                        <Link to="#">Contact</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Mobile Nav Menu Ends xxxxxxxxxxxxxxxxxxxxxxxxxx */}
          <div className="logoCol">
            <img src={logo} alt="logo" />
          </div>
          <div className="menuCol">
            <div className="largeMenu hidden sm:block">
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Shop</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
            <HiOutlineShoppingBag className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
