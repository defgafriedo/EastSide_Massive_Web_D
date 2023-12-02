import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
import Background from "../img/profile/background2.png";
import Photo from "../img/profile/contoh.png";
import Test from "../img/profile/yato.jpg";
import "./profileStyle.css";

function Profile() {
  document.body.style.backgroundImage = ` url('${Background}')`;

  const [images] = useState([Test, Test, Test, Test, Test]);
  const [kategoriArtist] = useState([
    "Painter",
    "Abstract Art",
    "Illustration Art",
    "Realist Art",
    "Natural Landscape",
    "Statue",
    "Statue",
    "Ceramics",
    "Clay",
    "Sculpture",
    "Teknik Resin",
    "Resin Engineering",
  ]);

  return (
    <Container
      fluid
      style={{
        backgroundsize: "cover",
        backgroundrepeat: "no-repeat",
        backgroundposition: "center",
        backgroundcolor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <style>
        {`
          @media screen and (max-width: 900px) {
            .container-fluid {
              flex-direction: column !important;
            }
          }
        `}
      </style>

      <Row
        className="my-2 mb-3"
        style={{
          backgroundColor: "#292929",
          width: "200px",
          height: "300px",
          borderRadius: "5px",
          marginLeft: "20px",
        }}
      >
        <Col>
          <Col className="d-flex justify-content-center">
            <Col xs={8} className="p-2 text-center mt-2">
              <Image
                src={`${Photo}`}
                style={{ backgroundColor: "white" }}
                roundedCircle
              />

              <h5 className="mt-2" style={{ color: "white" }}>
                Nickname
              </h5>
            </Col>
          </Col>
          <Col
            className="pm-5 d-flex flex-column align-items-start"
            style={{ marginRight: "40px" }}
          >
            <Button className="edit-button d-flex align-items-start">
              Edit&nbsp;profile
            </Button>
            <Button className="edit-button d-flex align-items-start">
              Logout
            </Button>
          </Col>
        </Col>
      </Row>
      <Row className="my-2 mb-3">
        <Col
          style={{
            backgroundColor: "#292929",
            width: "550px",
            height: "500px",
            borderRadius: "5px",
            marginLeft: "30px",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Col className="gallery-artist">
            <div className="image-galery">
              {images.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="responsive-image mt-2"
                  />
                  <div className="overlay-image">
                    <h6>Judul</h6>
                    <p>By...</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="my-2 mb-3 m-3">
        <Col
          className="mt-1"
          style={{
            color: "white",
            textAlign: "justify",
            fontWeight: "lighter",
            width: "420px",
          }}
        >
          <h3>Description</h3>
          <p>
            A talented and dedicated painter, Ahmad Suyanto represents harmony
            between creative imagination and deep technical skills. Born on
            January 11 1988 in Surabaya, Ahmad has explored the world of art
            from a young age, building a strong foundation for his creativity.
          </p>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "5%",
              flexDirection: "column",
              flexwrap: "wrap",
              marginLeft: "10%",
            }}
          >
            <div
              className="category-container"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              {kategoriArtist.map((kategori, index) => (
                <Button
                  key={index}
                  className="cetegory-button"
                  onClick={() => alert(kategori)}
                >
                  {kategori}
                </Button>
              ))}
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
