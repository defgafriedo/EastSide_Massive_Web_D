import "./detailShowcaseStyle.css";
import Background2 from "../img/background2.png";
import VideoShowcase from "../img/detailShowcase/videoShowcase.png";
import { Col, Container, Row } from "react-bootstrap";
import DrawShowcase from "../img/detailShowcase/drawShowcase.png";

const detailShowcase = () => {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('${Background2}')`;
  return (
    <>
      <Container fluid style={{ color: "#fff" }}>
        <Row className="my-5 mx-3">
          <Col>
            <img
              src={VideoShowcase}
              alt="video showcase"
              className="w-100"
            ></img>
          </Col>
          <Col style={{ fontFamily: "Poppins, sans-serif" }} className="mx-5">
            <h1>Background History</h1>
            <p>
              The painter chose to create this masterpiece as a celebration of
              the mystique and charm of feline companions, portraying them as
              majestic rulers in a fantasy realm. By depicting them as majestic
              rulers in a fantasy realm and incorporating angels, the artist not
              only celebrates the mystique of feline companions but also infuses
              the artwork with a sense of wonder and magic.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ color: "#fff" }}>
        <Row className="my-5 mx-5">
          <Col
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="mx-5 my-5"
          >
            <h1>Long Live the Cat King</h1>
            <p>by Jidan Bjirr</p>
            <p>
              The inclusion of angels adds a touch of innocence and magic. The
              art was aimed to evoke feelings of joy, wonder, and a sense of the
              fantastical in the viewers, offering a delightful escape into a
              world where cats reign as kings and angels are their devoted
              companions.
            </p>
            <div className="my-5">
              <div
                className="float-end"
                style={{
                  background: "rgba(255, 252, 252, 0.20)",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <p className="mx-3 my-1" style={{ color: "#D9D9D9" }}>
                  Painting
                </p>
              </div>
              <div
                className="float-end mx-3"
                style={{
                  background: "rgba(255, 252, 252, 0.20)",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <p className="mx-3 my-1" style={{ color: "#D9D9D9" }}>
                  Classic
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <img
              src={DrawShowcase}
              alt="video showcase"
              className="w-100"
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default detailShowcase;
