import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import drawing1 from "../img/listProfileGallery/Drawing1.png";


const ForSale = ({ itemForSale }) => {

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
      <div className="text-white">
        <h1 className="d-flex justify-content-center">For Sale</h1>
        <div className="d-flex justify-content-end">
          <Button
            variant="link"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => { }}
          >
            View More
          </Button>
        </div>
        <Row>
          {itemForSale.map((itemForSale) => (
            <Col className="d-flex mx-4 my-4 justify-content-center">
              <Card className="card">
                <Link to={`/detailforsale?id_art=${itemForSale.id}`}>
                  <Card.Img variant="top" src={processPhoto(itemForSale.image)} style={{ height: "300px", objectFit: "cover" }} />
                  <Card.Body style={{ background: "rgba(43, 43, 43, 0.70)" }}>
                    <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{itemForSale.nama}</Card.Title>
                    <Card.Text>{itemForSale.harga}</Card.Text>
                    <div style={{ display: 'flex' }}>
                      <Link to={`/detailforsale?id_art=${itemForSale.id}`} className="mx-2">
                        <Button variant="outline-light" style={{ width: '100%' }}>
                          Detail
                        </Button>
                      </Link>
                      <Link to={`/order-detail?id_art=${itemForSale.id}`} style={{ flex: 1 }} className="mx-2">
                        <Button variant="outline-primary" style={{ width: '100%' }}>
                          Buy
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ForSale;
