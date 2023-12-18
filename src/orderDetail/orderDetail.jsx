import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import Background3 from "../img/background3.png";
import Drawing from "../img/orderlist/Drawing3.png";
import Vector from "../img/orderlist/Vector.png";
import axios from "axios";
import React, { useState, useEffect } from "react";

const OrderDetail = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [orderItem, setOrderItem] = useState({});
  const location = useLocation();
  const id_art = new URLSearchParams(location.search).get("id_art");
  const [photo, setPhoto] = useState([])

  const artworkPrice = orderItem.harga;
  const shippingFee = 0.1 * artworkPrice;
  const totalPrice = artworkPrice + shippingFee;

  const [shippingAddress, setShippingAddress] = useState('');
  const navigate = useNavigate();


  const handleCheckout = () => {
    if (!shippingAddress) {
      return;
    }

    navigate('/payment', {
      state: {
        artworkPrice: artworkPrice,
        shippingFee: shippingFee,
        shippingAddress: shippingAddress,
        totalPrice: totalPrice,
      },
    });
  };

    useEffect(() => {
      const fetchArtDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/atsDetailArt?id_art=${id_art}`);
          setOrderItem(response.data.art);

          if (!response.data.art.image) {
            return '';
          } else {
            const delimiter = "karyaAsset/";
            const basePath = 'http://localhost:5000/karya/';
            const slicedPath = response.data.art.image.substring(response.data.art.image.indexOf(delimiter) + delimiter.length);
            const fullPath = `${basePath}${slicedPath}`;
            setPhoto(fullPath)
          }


        } catch (error) {
          console.error("Error fetching art details:", error);
        }
      };

      fetchArtDetails();
    }, []);

    return (
      <>
        <Container style={{ display: "flex" }}>
          <Row
            style={{
              width: "70%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "200px",
            }}
          >
            <Col style={{ padding: "4%" }}>
              <Col>
                <div
                  style={{
                    backgroundColor: "rgba(72, 90, 255, 0.65)",
                    width: "100%",
                    height: "25%",
                    borderRadius: "5px",
                    color: "white",
                    fontSize: "25px",
                  }}
                >
                  &nbsp;Order List
                </div>
              </Col>

              <Col
                className="first"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  width: "100%",
                  height: "70%",
                  borderRadius: "5px",
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Col style={{ width: "40%", padding: "5%" }}>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      verticalAlign: "middle",
                      display: "block",
                    }}
                    src={photo}
                    alt="Abstract Drawing"
                  />
                </Col>

                <p
                  style={{
                    flex: 1,
                    width: "60%",
                    marginLeft: "2%",
                    color: "white",
                    fontSize: "8px",
                    marginTop: "5%",
                    textAlign: "justify",
                    marginRight: "6%",
                  }}
                >
                  {orderItem.deskripsi}
                </p>
              </Col>

              <Col
                className="two"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  width: "100%",
                  padding: "3%",
                  marginTop: "3%",
                  borderRadius: "5px",
                }}
              >
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <img style={{ height: "25px", width: "25px" }} src={Vector} />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: "white",
                    }}
                  >
                    Shipping Address
                  </p>
                </Col>
                <Col style={{}}>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    style={{
                      padding: "5px",
                      borderRadius: "3px",
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "rgba(156, 152, 152, 0.46)",
                      width: "100%",
                      height: "100px",
                    }}
                  />
                </Col>
              </Col>
            </Col>
          </Row>
          <Row
            style={{
              width: "50%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "-39%",
              marginlefyt: "3%",
            }}
          >
            <Col style={{ padding: "4%" }}>
              <Col
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  width: "100%",
                  borderRadius: "5px",
                  height: "100%",
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
                  <p>Rp.{orderItem.harga}</p>
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
                    marginTop: "10%",
                  }}
                >
                  <p>Total</p>
                  <p>Rp.{totalPrice}</p>
                </Col>
                <Button
                  style={{
                    backgroundColor: "rgba(72, 90, 255, 0.65)",
                    width: "100%",
                  }}
                  onClick={handleCheckout}
                >
                  Chechk Out
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  export default OrderDetail;
