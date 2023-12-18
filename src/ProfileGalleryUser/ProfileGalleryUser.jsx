import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BackgroundProfileGallery from "../img/backgroundProfileGallery.png";
import BackgroundShowcase from "../img/background2.png";
import { FaPlus } from "react-icons/fa";
import Showcase from "./Showcase";
import ForSale from "./ForSale";
import axios from "axios";

const ProfileGalleryUser = () => {
  document.body.style.backgroundImage = `url('${BackgroundProfileGallery}')`;
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundRepeat = "no-repeat";
  const id_user = localStorage.getItem("userId");
  const [itemShowcase, setItemShowcase] = useState([]);
  const [itemForSale, setItemForSale] = useState([]);
  const [galleryArtist, setGalleryArtist] = useState([])
  const [photo, setPhoto] = useState("");
  const { id_art } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/atsgetuser?id_user=${id_user}&id_art=${id_art}`)
        const dataUser = response.data;
        setGalleryArtist(dataUser.user);

        if (itemShowcase) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/atsShowcaseProfile?id_user=${id_user}`
          );
          const data = response.data;
          setItemShowcase(data.data);
        }
        if (itemForSale) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/atsSaleProfile?id_user=${id_user}`
          );
          const data = response.data;
          setItemForSale(data.data);
        }

        if (response.data.user) {
          const delimiter = "profileAsset/";
          const basePath = "http://localhost:5000/stat/";
          const slicedPath = response.data.user.image.substring(
            response.data.user.image.indexOf(delimiter) + delimiter.length
          );
          const fullPath = `${basePath}${slicedPath}`;
          const fileURL = fullPath;
          setPhoto(fileURL);
        } else {
          console.error("sad", response.data.message);
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
              <img
                src={photo}
                alt="Photo Profile Artist"
                style={{ height:'6rem', width: "12rem" }}
              />
          </div>
          <div className="mx-5 my-3">
            <Row className="d-flex align-items-center">
              <Col xs="auto">
                <h3>{galleryArtist.nama}</h3>
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
            <h5>{galleryArtist.tagline}</h5>
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
            <Link to="/inputpostingkarya">
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
                <FaPlus />
              </button>
            </Link>
          </div>
          <Showcase itemShowcase={itemShowcase} />
        </Container >
      </div >

      <div style={{ background: "#000", backgroundSize: "cover" }}>
        <Container className="my-5">
          <ForSale itemForSale={itemForSale} />
        </Container>
      </div>
    </>
  );
};

export default ProfileGalleryUser;