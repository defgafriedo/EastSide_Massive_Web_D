import Background2 from "../img/background2.png";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DetailForSale = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('${Background2}')`;
  const [artDetails, setArtDetails] = useState({});
  const location = useLocation();
  const id_art = new URLSearchParams(location.search).get("id_art");
  const [photo, setPhoto] = useState([])

  const [tag, setTag] = useState([])

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/atsDetailArt?id_art=${id_art}`);
        setArtDetails(response.data.art);
        setTag(response.data.art.tag.split(','))

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

      <Container fluid style={{ color: "#fff" }}>
        <Row className="my-5 mx-5">
          <Col
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="mx-5 my-5"
          >
            <h1>{artDetails.nama}</h1>
            <p>by {artDetails.artist_name}
              <Link to={`/order-detail?id_art=${artDetails.id}`} className="mx-2">
                <Button variant="outline-primary" className="float-end" style={{width:'4rem'}}>
                  Buy
                </Button>
              </Link>
            </p>
            <p>{artDetails.deskripsi}</p>

            <div className="my-5 float-end">
              {tag.map((tag, index) => (
                <Button
                  key={index}
                  className="cetegory-button"
                  style={{ fontSize: '14px' }}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </Col>
          <Col>
            <img
              src={photo}
              alt="video showcase"
              className="w-100"
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailForSale;
