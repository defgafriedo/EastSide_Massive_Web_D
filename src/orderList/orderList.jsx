import { Button, Col, Container, Row } from "react-bootstrap"
import './orderListStyle.css'
import Gambar from '../img/Drawing2.png'

const orderList = () => {
    return (
        <Container fluid>
            <div className="mx-5 my-4 d-flex" style={{ backgroundColor: 'rgba(72, 90, 255, 0.65)', color:'#fff', borderRadius:'10px' }}>
                <h3 className="mx-3 my-2">Order Status List</h3>
            </div>

            <Col className="bg-white mx-5">
                <Row className="bg-black">
                    <Col className="bg-black px-0 col-md-3" >
                        <img src={Gambar} className="img-fluid m-4 w-75 h-75"></img>
                    </Col>
                    <Col className="col-md-9 h-100 position">
                        <Row>
                            <h1>una</h1>
                            <p>asdasd asqweqwhk Afnlasjlqjwelqjladkaljdlk Afnlasjlqjwelqjladkaljd laljdlk Afnlasjlqjwelqjladkaljd</p>
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