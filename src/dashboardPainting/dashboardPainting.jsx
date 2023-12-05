import React, { useRef } from "react";
import { Card, Row, Col, Container, Table, Button } from "react-bootstrap";
import "./dashboardPaintingStyle.css";
import drawing from "../img/background1.png";
import drawing1 from "../img/dasboardPainting/images.jpeg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const containerRef = useRef(null);

  // const handleScrollRight = () => {
  //     if (containerRef.current) {
  //         containerRef.current.scrollLeft += 100;
  //     }
  // };
  // const handleScrollLeft = () => {
  //     if (containerRef.current) {
  //         containerRef.current.scrollLeft -= 100;
  //     }
  // };
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${drawing}')`;
  document.body.style.backgroundSize = "cover";

  const [cardTitle] = useState([
    "Card Title 1",
    "Card Title 2",
    "Card Title 3",
    "Card Title 4",
    "Card Title 5",
    "Card Title 6",
    "Card Title 7",
  ]);

  const [shortDescription] = useState([
    "Some quick example 1",
    "Some quick example 2",
    "Some quick example 3",
    "Some quick example 4",
    "Some quick example 5",
    "Some quick example 6",
    "Some quick example 7",
  ]);

  return (
    <div>
      <Container>
        <Container style={{ marginBottom: "1rem", marginTop: "2rem" }}>
          <Button
            variant="outline-black"
            className="navbar-btn"
            href="dashboard"
          >
            All
          </Button>
          <Button variant="outline-black" className="navbar-btn">
            Painting
          </Button>
          <Button
            variant="outline-black"
            className="navbar-btn"
            href="dashboardstatue"
          >
            Statue
          </Button>
        </Container>

        <div
          className="horizontal-scroll-container"
          style={{ marginBottom: "4rem" }}
          ref={containerRef}
        >
          <Row
            style={{ flexWrap: "nowrap", overflowY: "auto" }}
            className="text-white text-center"
          >
            {cardTitle.map((cardtitle, index) => (
              <Col
                style={{
                  width: "16rem",
                  marginBottom: "1rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                key={index}
              >
                <Card
                  className="mb-4"
                  style={{
                    width: "16rem",
                    height: "20rem",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={drawing1}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{cardtitle}</Card.Title>
                    <Card.Text>{shortDescription[index]}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* <button className="scroll-button" onClick={handleScrollRight}>
                <FaChevronRight />
                </button>
                <button className="scroll-button" onClick={handleScrollLeft}>
                <FaChevronLeft />
                </button> */}
        <Container style={{ marginBottom: "2rem" }}>
          <h1 style={{ color: "white", fontSize: "2em" }}>Top 3 Artist</h1>
        </Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ marginBottom: "4rem" }}
        >
          <Col md="auto" style={{ marginRight: "4rem" }}>
            <Card className="" style={{ width: "16rem" }}>
              <Card.Img variant="top" src={drawing1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card className="mb-5" style={{ width: "16rem" }}>
              <Card.Img variant="top" src={drawing1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" style={{ marginLeft: "4rem" }}>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={drawing1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="black-background " style={{ marginBottom: "4rem" }}>
          <Col>
            <Container>
              <Button variant="outline-black" className="navbar-artist">
                Trending
              </Button>
              <Button variant="outline-black" className="navbar-artist">
                Top
              </Button>
            </Container>
            <Table borderless variant="dark">
              <thead>
                <tr className="block-example border-bottom border-white">
                  <th>No</th>
                  <th>Artist</th>
                  <th>Avg Price</th>
                  <th>Sum of Art</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table borderless variant="dark">
              <thead>
                <tr className="block-example border-bottom border-white">
                  <th>No</th>
                  <th>Artist</th>
                  <th>Avg Price</th>
                  <th>Sum of Art</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ananta Rizky</td>
                  <td>1.000.000</td>
                  <td>200</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <div className="black-background text-white text-center">
          <h4 style={{ marginBottom: "3rem", marginBottom: "3rem" }}>
            Testimonial from success artists
          </h4>
          <Row className="justify-content-center align-items-center">
            <Col md="auto" style={{ marginRight: "4rem" }}>
              <Card className="" style={{ width: "16rem" }}>
                <Card.Img variant="top" src={drawing1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              <Card className="" style={{ width: "16rem" }}>
                <Card.Img variant="top" src={drawing1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" style={{ marginLeft: "4rem" }}>
              <Card className="" style={{ width: "16rem" }}>
                <Card.Img variant="top" src={drawing1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
