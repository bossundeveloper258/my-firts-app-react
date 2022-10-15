import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export const About = () => {
    return(
        <>
            <Row className="pt-5 ps-5">
                <Col className='text-start mb-5'><h1 className='text-white'>Common Questions</h1></Col>
            </Row>
            <Row className="ps-5">
                <Col className='text-start ps-5' md={4}>
                    <ListGroup className='ps-3 pe-3'>
                        <ListGroup.Item className='p-3'>Refund Policy</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Cancellation Policy</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Warranty Services</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Financing</ListGroup.Item>
                        <ListGroup.Item className='p-3'>How long will it take for my PC to arrive?</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Do you ship internationally?</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Do you setup and install Windows, drivers, etc?</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}