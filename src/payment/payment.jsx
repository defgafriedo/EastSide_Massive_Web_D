import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dana from "../img/paymentLogo/Dana.png";
import OVO from "../img/paymentLogo/OVO.png";
import ShopeePay from "../img/paymentLogo/ShopeePay.png";
import BRI from "../img/paymentLogo/bankBRI.png";
import BCA from "../img/paymentLogo/BankBCA.png";
import "./paymentStyle.css";
import Background3 from "../img/background3.png";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const generateRandomDigits = (length) => {
  return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
};

const generateRandomInvoiceNumber = () => {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomDigits1 = generateRandomDigits(3);
  const randomDigits2 = generateRandomDigits(3);
  return `INV${randomDigits1}${currentDate}${randomDigits2}`;
};

const Payment = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;
  const location = useLocation();
  const { idart, shippingAddress, totalPrice, artworkPrice, shippingFee } = location.state || {};
  const [paymethod, setPay] = useState([]);
  const navigate = useNavigate();
  const storedUserId = localStorage.getItem("userId");

  const handlePaymentChange = (event) => {
    setPay(event.target.value);
  };
  const generateFormattedDate = () => {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return currentDate;
  };

  const handleCheckout = async () => {

    try {
      const nomorPembayaran = generateRandomDigits(9);
      const transactionData = {
        id_art: idart,
        id_pembeli: storedUserId,
        invoice: generateRandomInvoiceNumber(),
        metode_pembayaran: paymethod,
        nomor_pembayaran: nomorPembayaran,
        alamat: shippingAddress,
        total: totalPrice,
        kurir: "JNE",
        resi: "",
        status: "Unpaid",
        tanggal: generateFormattedDate()
      };

      const response = await axios.post("http://localhost:5000/api/v1//atstransaction", transactionData);

      if (response.data.success) {
        console.log(response.data.message);
        navigate('/order-list');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle other errors as needed
    }
  };
  return (
    <Container>
      <Row>
        <Col className="payment my-3 mx-3">
          <div className="my-3 mx-3">
            <h5>Payment</h5>
            {/* <p>Shipping Address: {shippingAddress}</p>
            <p>Total Price: {totalPrice}</p> */}
            <div className="my-3">
              <input
                type="radio"
                id="Dana"
                name="paymentMethod"
                value="Dana"
                checked={paymethod === "Dana"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="Dana">
                <img className="Dana mx-3" src={Dana} alt="Dana" />
              </label>
            </div>
            <div className="my-3">
              <input
                type="radio"
                id="Ovo"
                name="paymentMethod"
                value="Ovo"
                checked={paymethod === "Ovo"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="Ovo">
                <img className="Ovo mx-3" src={OVO} alt="OVO" />
              </label>
            </div>
            <div className="my-3">
              <input
                type="radio"
                id="Shopee-pay"
                name="paymentMethod"
                value="Shopee-pay"
                checked={paymethod === "Shopee"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="Shopee-pay">
                <img
                  className="ShopeePay mx-3"
                  src={ShopeePay}
                  alt="ShopeePay"
                />
              </label>
            </div>
          </div>
          <div className="my-5 mx-3">
            <h5>Virtual Account</h5>
            <div className="my-3">
              <input type="radio"
                id="BRI"
                name="paymentMethod"
                value="BRI"
                checked={paymethod === "Bri"}
                onChange={handlePaymentChange} />
              <label htmlFor="BRI">
                <img className="BRI mx-3" src={BRI} alt="BRI" />
              </label>
            </div>
            <div className="my-3">
              <input type="radio"
                id="BCA"
                name="paymentMethod"
                value="BCA"
                checked={paymethod === "Bca"}
                onChange={handlePaymentChange} />
              <label htmlFor="BCA">
                <img className="BCA mx-3" src={BCA} alt="BCA" />
              </label>
            </div>
          </div>
        </Col>

        <Col className="my-3 ">
          <Col
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.50)",
              borderRadius: "10px",
              flexDirection: "column",
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                width: "95%",
                marginLeft: "2%",
              }}
            >
              <p>Artwork Price</p>
              <p>Rp.{artworkPrice}</p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                width: "95%",
                marginLeft: "2%",
              }}
            >
              <p>Shipping Fee</p>
              <p>Rp.{shippingFee}</p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                width: "95%",
                marginLeft: "2%",
              }}
            >
              <p>Total</p>
              <p>Rp.{totalPrice}</p>
            </Col>
            <Button
              onClick={handleCheckout}
              style={{
                backgroundColor: "rgba(72, 90, 255, 0.65)",
                width: "100%",
              }}
            >
              Check Out
            </Button>
          </Col>
        </Col>
      </Row>
    </Container >
  );
};

export default Payment;
