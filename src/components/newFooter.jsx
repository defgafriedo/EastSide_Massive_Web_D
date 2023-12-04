import React from "react";
import "./newFooterStyle.css";
import logo from "../img/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col" style={{ display: "flex" }}>
            <img src={logo} alt="logo" />
          </div>
          {/* Column2 */}
          <div className="col" style={{ display: "flex" }}>
            <a href="#" style={{fontSize:'16px' }}>Contact&nbsp;Us</a>
            <a href="./aboutus" style={{fontSize:'16px' }}>About&nbsp;Us</a>
            <a href="#" style={{fontSize:'16px' }}>Support</a>
            <a href="#" style={{fontSize:'16px' }}>Privacy&nbsp;Policy</a>
          </div>
          {/* Column3 */}
          <div className="col" style={{ display: "flex" }}>
            <div className="icon-container">
              <FaTwitter className="icon" />
            </div>
            <div className="icon-container">
              <FaInstagram className="icon" />
            </div>
            <div className="icon-container">
              <FaFacebookF className="icon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; Copyright {new Date().getFullYear()} All Rights Reserved by
            <br></br>ArtoSite
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
