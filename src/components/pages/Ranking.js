import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

export const Ranking = () => {
    return(
        <>
            <Row className="container-body">
                <Col >
                    <Container className=''>
                        <Row className="pt-5 ps-5">
                            <Col className='text-start mb-5'><h1 className='text-blue'>Influencers</h1></Col>
                        </Row>
                        <Row className="ps-5">
                            <Col className='text-start p-5 pt-0' md={6}>
                                {/* Componente Card de bootstrap */}
                                <Card className="mb-5 border-0">
                                    <Card.Img variant="top" src="img/Rubius-streaming.jpg" />
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col className='text-start' xs={2}>
                                                <Image src='img/avatar-react.png' fluid={true} className="avatar-box-shadow rounded-circle"></Image>
                                            </Col>
                                            <Col className='text-start'>
                                                <Card.Title className='m-0'><h3 className='mb-1'>MR TOP 5</h3></Card.Title>
                                                <span className='border-card-title'></span>
                                                <Card.Text className='text-secondary fs-13px'>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='text-start p-5 pt-0' md={6}>
                                {/* Componente Card de bootstrap */}
                                <Card className="mb-5 border-0">
                                    <Card.Img variant="top" src="img/1500x844-imagen1-5.jpg" />
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col className='text-start' xs={2}>
                                                <Image src='img/avatar-react.png' fluid={true} className="avatar-box-shadow rounded-circle"></Image>
                                            </Col>
                                            <Col className='text-start'>
                                                <Card.Title className='m-0'><h3 className='mb-1'>MR TOP 5</h3></Card.Title>
                                                <span className='border-card-title'></span>
                                                <Card.Text className='text-secondary fs-13px'>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                
            </Row>
        </>
    )
}