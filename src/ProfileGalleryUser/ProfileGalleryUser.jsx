import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import BackgroundProfileGallery from "../img/backgroundProfileGallery.png";
import PhotoProfileArtist from "../img/ProfileGalleryArtist/photoProfileArtist.png";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import BackgroundShowcase from "../img/background2.png";
import Showcase from "./Showcase";
import ForSale from "./ForSale";

const ProfileGalleryArtist = () => {
  document.body.style.backgroundImage = `url('${BackgroundProfileGallery}')`;
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundRepeat = "no-repeat";

  const [itemShowcase, setItemShowcase] = useState([
    {
      image: drawing1,
      title: "Lies",
      description:
        "“There’s twin line beetwen life and death. U will find justice over there.”",
    },
    {
      image: drawing1,
      title: "Lies",
      description:
        "“There’s twin line beetwen life and death. U will find justice over there.”",
    },
    {
      image: drawing1,
      title: "Lies",
      description:
        "“There’s twin line beetwen life and death. U will find justice over there.”",
    },
  ]);

  const [itemForSale, setItemForSale] = useState([
    { image: drawing1, title: "Lies", price: "Rp.3000" },
    { image: drawing1, title: "Lies", price: "Rp.3000" },
    { image: drawing1, title: "Lies", price: "Rp.3000" },
  ]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${BackgroundProfileGallery}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <Container
          fluid
          className="position-absolute bottom-0"
          style={{ marginTop: "50px" }}
        >
          <div className="mx-5">
            <img
              src={PhotoProfileArtist}
              alt="Photo Profile Artist"
              style={{ maxHeight: "100%", width: "auto" }}
            />
          </div>
          <div className="mx-5 my-3">
            <Row className="d-flex align-items-center">
              <Col xs="auto">
                <h3>Jidan bjirr</h3>
              </Col>
              <Col xs="auto">
                <div
                  className="d-lg-block"
                  style={{ height: "25px", border: "1px solid #fff" }}
                ></div>
              </Col>
              <Col xs="auto">
                <FaTwitter style={{ fontSize: "25px" }} />
                <FaFacebook className="mx-4 " style={{ fontSize: "25px" }} />
                <FaInstagram style={{ fontSize: "25px" }} />
              </Col>
            </Row>
            <h5>Stoick</h5>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          backgroundImage: `url('${BackgroundShowcase}')`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Container className="py-5 my-4">
          <Showcase itemShowcase={itemShowcase} />
        </Container>
      </div>

      <div style={{ background: "#000", backgroundSize: "cover" }}>
        <Container className="my-5">
          <ForSale itemForSale={itemForSale} />
        </Container>
      </div>
    </>
  );
};

export default ProfileGalleryArtist;
