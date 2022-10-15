import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export const Home = () => {
    return(
        <>
            <Row className="pt-5 ps-5">
                <Col className='text-start mb-5'><h1 className='text-white'>Support Guides</h1></Col>
            </Row>
            <Row className="ps-5">
                <Col className='text-start ps-5' md={4}>
                    <ListGroup className='ps-3 pe-3'>
                        <ListGroup.Item className='p-3'>Build Redux Quick Start Guide </ListGroup.Item>
                        <ListGroup.Item className='p-3'>System Overview</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Troubleshooting - Display</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Reseating Guide - Memory</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Reseating Guide - Graphics Card</ListGroup.Item>
                        <ListGroup.Item className='p-3'>Realignment Guide - Rear I/O</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}