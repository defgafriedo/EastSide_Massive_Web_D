import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gambar from "../img/Drawing2.png";
import Background3 from "../img/background3.png";
import axios from 'axios';


const OrderList = ({ idPembeli }) => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Background3}')`;

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/atsShowOrder/35`);
        const data = response.data;
        setOrderData(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idPembeli]);

  const processPhoto = (photo) => {
    if (!photo) {
      return '';
    }
    const delimiter = "karyaAsset/";
    const basePath = 'http://localhost:5000/karya/';
    const slicedPath = photo.substring(photo.indexOf(delimiter) + delimiter.length);
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };

  return (
    <Container fluid>
      <div
        className="mx-5 my-4 d-flex"
        style={{
          backgroundColor: "rgba(72, 90, 255, 0.65)",
          color: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3 className="mx-3 my-2">Order Status List</h3>
      </div>

      <Col className="mx-5 my-3" style={{ color: "#fff" }}>
        {orderData.map(order => (
          <Row key={order.id}
            className="rounded-4 my-4"
            style={{ backgroundColor: "rgba(11, 11, 11, 0.8)" }}
          >
            <Col className="px-0 col-md-3">
              <img src={processPhoto(order.image)} className="img-fluid m-4 w-75 h-75"></img>
            </Col>
            <Col className="col-md-9 my-2">
              <Row>
                <h1>{order.nama}</h1>
                <p>{order.deskripsi}</p>
              </Row>

              <Row className="mx-3 mt-5">
                <Col className="d-grid gap-2 my-1">
                  <Button variant="secondary" href="/order-detail">
                    Report
                  </Button>
                </Col>
                <Col className="d-grid gap-2 my-1">
                  <Button variant="primary" href="/order-detail">
                    Received
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default OrderList;
