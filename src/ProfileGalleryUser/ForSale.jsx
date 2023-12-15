import { Row, Col, Card, Button } from 'react-bootstrap';

const ForSale = ({ itemForSale }) => {
    return (
        <>
            <div className="text-white">
                <h1 className="d-flex justify-content-center">For Sale</h1>
                <div className='d-flex justify-content-end'>
                    <Button
                        variant="link"
                        style={{ textDecoration: 'none', color: 'inherit', }}
                        onClick={() => {

                        }}>
                        View More
                    </Button>
                </div>
                <Row>
                    {itemForSale.map((itemForSale) => (
                        <Col className='d-flex mx-4 my-4 justify-content-center'>
                            <Card className='card'>
                                <Card.Img variant="top" src={itemForSale.image} />
                                <Card.Body style={{ background: 'rgba(43, 43, 43, 0.70)' }}>
                                    <Card.Title>{itemForSale.title}</Card.Title>
                                    <Card.Text>
                                        {itemForSale.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default ForSale