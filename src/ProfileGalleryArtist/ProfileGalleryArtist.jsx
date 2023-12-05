import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundProfileGallery from "../img/backgroundProfileGallery.png";
import PhotoProfileArtist from "../img/ProfileGalleryArtist/photoProfileArtist.png";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import drawing2 from "../img/ProfileGalleryArtist/Drawing2.png";
import drawing3 from "../img/ProfileGalleryArtist/Drawing3.png";
import drawing4 from "../img/ProfileGalleryArtist/Drawing4.png";
import drawing5 from "../img/ProfileGalleryArtist/Drawing5.png";
import drawing6 from "../img/ProfileGalleryArtist/Drawing6.png";
import drawing7 from "../img/ProfileGalleryArtist/Drawing7.png";
import drawing8 from "../img/ProfileGalleryArtist/Drawing8.png";
import drawing10 from "../img/ProfileGalleryArtist/Drawing10.png";
import BackgroundShowcase from "../img/background2.png";
import { FaPlus } from "react-icons/fa";
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
      link: "/detailshowcase",
    },
    {
      image: drawing2,
      title: "Lies",
      description:
        "“There’s twin line beetwen life and death. U will find justice over there.”",
      link: "/detailshowcase",
    },
    {
      image: drawing10,
      title: "Lies",
      description:
        "“There’s twin line beetwen life and death. U will find justice over there.”",
      link: "/detailshowcase",
    },
  ]);

  const [itemForSale, setItemForSale] = useState([
    { image: drawing3, title: "Lies", price: "Rp.3000", link: "/order-list" },
    { image: drawing4, title: "Lies", price: "Rp.3000" },
    { image: drawing5, title: "Lies", price: "Rp.3000" },
    { image: drawing6, title: "Lies", price: "Rp.3000" },
    { image: drawing7, title: "Lies", price: "Rp.3000" },
    { image: drawing8, title: "Lies", price: "Rp.3000" },
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
          <div className="d-flex justify-content-end my-4 mx-3">
            <button
              variant="secondary"
              className="d-flex align-items-center justify-content-center"
              style={{
                fontSize: "20px",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
            >
              <Link to="/inputpostingkarya">
                <FaPlus />
              </Link>
            </button>
          </div>
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
