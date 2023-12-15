import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundProfileGallery from "../img/backgroundProfileGallery.png";
import PhotoProfileArtist from "../img/ProfileGalleryArtist/photoProfileArtist.png";
import drawing1 from "../img/listProfileGallery/Drawing1.png";
import drawing2 from "../img/ProfileGalleryArtist/Drawing2.png";
import drawing3 from "../img/ProfileGalleryArtist/Drawing3.png";
import BackgroundShowcase from "../img/background2.png";
import { FaPlus } from "react-icons/fa";
import Showcase from "./Showcase";
import ForSale from "./ForSale";
import axios from "axios";

const ProfileGalleryArtist = () => {
  document.body.style.backgroundImage = `url('${BackgroundProfileGallery}')`;
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundRepeat = "no-repeat";

  const [itemShowcase, setItemShowcase] = useState([]);
  const [itemForSale, setItemForSale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (itemShowcase) {
          const response = await axios.get(
            "http://localhost:5000/api/v1/atsShowcaseProfile"
          );
          const data = response.data;
          setItemShowcase(data.data);
        }
        if (itemForSale) {
          const response = await axios.get(
            "http://localhost:5000/api/v1/atsSaleProfile"
          );
          const data = response.data;
          setItemForSale(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
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
            <Link to="/user1">
              <img
                src={PhotoProfileArtist}
                alt="Photo Profile Artist"
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </Link>
          </div>
          <div className="mx-5 my-3">
            <Row className="d-flex align-items-center">
              <Col xs="auto">
                <h3>Jidan</h3>
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
