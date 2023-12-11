import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import drawing1 from "../img/listProfileGallery/Drawing1.png";


const Showcase = ({ itemShowcase }) => {
  const processPhoto = (photo) => {
    if (!photo) {
      return '';
    }
    const delimiter = "karyaAsset/";
    const basePath = 'http://localhost:5000/karya/';
    const slicedPath = photo.substring(photo.indexOf(delimiter) + delimiter.length);
    const fullPath = `${basePath}${slicedPath}`;
    const fileURL = fullPath;
    return fileURL;
  };
  return (
    <>
      <div
        className="text-white py-5"
        style={{
          border: "1px solid rgba(42, 42, 42, 1.0)",
          boxShadow: "0px 4px 500px 0px rgba(0, 0, 0, 0.7)",
          borderRadius: "20px",
        }}
      >
        <h1 className="d-flex justify-content-center">Showcase</h1>
        <Row>
          {itemShowcase.map((itemShowcase, index) => (
            <Col
              className="d-flex mx-4 my-4 justify-content-center"
              key={index}
            >
              <Card className="card">
                <Link to={itemShowcase.link}>
                  <Card.Img variant="top" src={processPhoto(itemShowcase.image)} />
                </Link>
                <Card.Body style={{ background: "rgba(43, 43, 43, 0.70)" }}>
                  <Card.Title>{itemShowcase.nama} </Card.Title>
                  <Card.Text>{itemShowcase.deskripsi}</Card.Text>
                  <Link to={itemShowcase.link}>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Showcase;
