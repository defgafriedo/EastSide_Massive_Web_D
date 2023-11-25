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
          <div className="col">
            <img src={logo} alt="logo" />
          </div>
          {/* Column2 */}
          <div className="col">
            <a href="#">Kontak</a>
            <a href="#">Tentang&nbsp;kami</a>
            <a href="#">Support</a>
            <a href="#">Kebijakan&nbsp;pribadi</a>
          </div>
          {/* Column3 */}
          <div className="col">
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
