import { Button, Col, Container, Row } from "react-bootstrap"
import './orderListStyle.css'
import Gambar from '../img/Drawing2.png'

const orderList = () => {
    return (
        <Container fluid>
            <div className="mx-5 my-4 d-flex" style={{ backgroundColor: 'rgba(72, 90, 255, 0.65)', color:'#fff', borderRadius:'10px'}}>
                <h3 className="mx-3 my-2">Order Status List</h3>
            </div>

            <Col className="mx-5 my-3" style={{color:'#fff'}}>
                <Row className="rounded-4" style={{backgroundColor: 'rgba(11, 11, 11, 0.8)'}}>
                    <Col className="px-0 col-md-3" >
                        <img src={Gambar} className="img-fluid m-4 w-75 h-75" ></img>
                    </Col>
                    <Col className="col-md-9 my-2">
                        <Row>
                            <h1>Burnout</h1>
                            <p>Abstract paintings often create unique and sometimes confusing visual experiences, freeing the viewer from the constraints of objective representation.  Read more</p>
                        </Row>
                        <Row className="mx-3 mt-5">
                            <Col className="d-grid gap-2 my-1">
                                <Button variant="secondary">
                                    Detail
                                </Button>
                            </Col>
                            <Col className="d-grid gap-2 my-1">
                                <Button variant="secondary">
                                    Report
                                </Button>
                            </Col>
                            <Col className="d-grid gap-2 my-1">
                                <Button variant="primary">
                                    Recieved
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Container>
    )

}


export default orderList