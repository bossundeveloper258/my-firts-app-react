import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Reviews = () => {
    return(
        <>
            <Row className="">
                <Col className='text-start bg-white px-5 py-3'>
                    <h1 className='mb-4'>User Reviews</h1>
                    <h5>Global Rate <FontAwesomeIcon icon={faStar} color={"#ffcd80"} size={ 'sm' }/> <FontAwesomeIcon icon={faStar} color={"#ffcd80"} size={ 'sm' }/> <FontAwesomeIcon icon={faStar} color={"#ffcd80"} size={ 'sm' }/> <FontAwesomeIcon icon={faStar} color={"#ffcd80"} size={ 'sm' }/> </h5>
                </Col>
            </Row>
            <hr className='m-0'></hr>
            <Row className="">
                <Col className='text-start bg-white px-5 py-3'>
                    <h5 className='mb-4'>Juan Lopez</h5>
                    <p className='ps-4'>I completely recomend this service</p>
                </Col>
            </Row>
            <hr className='m-0'></hr>
            <Row className="">
                <Col className='text-start bg-white px-5 py-3'>
                    <h5 className='mb-4'>Jhon Doe</h5>
                    <p className='ps-4'>Great Service</p>
                </Col>
            </Row>
            <hr className='m-0'></hr>
            <Row className="">
                <Col className='text-start bg-white px-5 py-3'>
                    <h5 className='mb-4'>Carl Johnson</h5>
                    <p className='ps-4'>Pc well builded and nice case quality</p>
                </Col>
            </Row>
        </>
    )
}