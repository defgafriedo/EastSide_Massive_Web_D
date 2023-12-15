import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import leftbackground from "../img/aboutUs/left.jpg";
import Background from "../img/loginSignup/background-login.png";
import "./aboutUstyle.css";

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
            style={{ width: "105%", height: "700px", marginLeft: "-10%" }}
          />
        </Col>
        <Col
          className="content-right"
          style={{ width: "50%", display: "flex", flexDirection: "column" }}
        >
          <Col style={{ paddingTop: "120px" }}>
            <h1 style={{ color: "white", fontSize: "55px" }}>About Us.</h1>
          </Col>
          <Col
            className="right text"
            style={{
              display: "flex",
              alignItems: "flex-end",
              textAlign: "justify",
              color: "white",
              marginLeft: "50%",
              width: "50%",
            }}
          >
            <p>
              To provide a stage that supports, inspires, and unites artists
              with audiences seeking profound visual experiences. We aim to be
              the bridge connecting the art world with everyday life,
              celebrating the diversity of creativity and bringing beauty with
              every click.
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;
