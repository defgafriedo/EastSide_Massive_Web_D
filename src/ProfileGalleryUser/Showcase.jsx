import { Row, Col, Card } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const Showcase = ({ itemShowcase }) => {
    return (
        <>
            <div className='d-flex justify-content-end my-4 mx-3'>
                <button variant="secondary" className='d-flex align-items-center justify-content-center' style={{ fontSize: '20px', borderRadius: '50%', width: '40px', height: '40px' }}><FaPlus /></button>
            </div>
            <div className="text-white py-5" style={{ border: '1px solid rgba(42, 42, 42, 1.0)', boxShadow: '0px 4px 500px 0px rgba(0, 0, 0, 0.7)', borderRadius: '20px' }}>
                <h1 className="d-flex justify-content-center">Showcase</h1>
                <Row>
                    {itemShowcase.map((itemShowcase) => (
                        <Col className='d-flex mx-4 my-4 justify-content-center'>
                            <Card className='card'>
                                <Card.Img variant="top" src={itemShowcase.image} />
                                <Card.Body style={{ background: 'rgba(43, 43, 43, 0.70)' }}>
                                    <Card.Title>{itemShowcase.title} </Card.Title>
                                    <Card.Text>
                                        {itemShowcase.description}
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

export default Showcase