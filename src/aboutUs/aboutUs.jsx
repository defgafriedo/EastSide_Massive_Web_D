import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import leftbackground from "../img/aboutUs/left.jpg";
import Background from "../img/loginSignup/background-login.png";

function AboutUs() {
  document.body.style.backgroundImage = `url('${Background}')`;

  return (
    <Container
      style={{
        flexDirection: "row",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>
        {`
          @media screen and (max-width: 908px) {
            .container-fluid {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      <Row>
        <Col className="content-left" style={{ width: "100%" }}>
          <Image
            src={`${leftbackground}`}
            style={{ width: "90%", height: "700px", marginLeft: "-10%" }}
          />
        </Col>
        <Col
          className="content-right"
          style={{ width: "50%", display: "flex", flexDirection: "column" }}
        >
          <Col style={{ paddingTop: "70px" }}>
            <h1 style={{ color: "white", fontSize: "55px" }}>About Us.</h1>
          </Col>
          <Col style={{ paddingBottom: "20%" }}>
            <Col
              className="right text"
              style={{
                display: "flex",
                alignItems: "flex-end",
                textAlign: "left",
                color: "white",
                width: "50%",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Creating a platform that allows artists to showcase their work
                and buyers to discover the beauty they seek.
              </p>
            </Col>
            <Col
              className="right text"
              style={{
                display: "flex",
                alignItems: "flex-end",
                textAlign: "right",
                color: "white",
                marginLeft: "50%",
                width: "50%",
                paddingTop: "50px",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                To provide a stage that supports, inspires, and unites artists
                with audiences seeking profound visual experiences. We aim to be
                the bridge connecting the art world with everyday life,
                celebrating the diversity of creativity and bringing beauty with
                every click.
              </p>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;