import { Navbar , Nav , NavDropdown } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad , faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <Navbar expand="lg" className="bg-blue">
            <Container fluid>
                <Navbar.Brand href="#">
                    <FontAwesomeIcon icon={faGamepad} color={"#FFF"} size={ "2x" }/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <NavLink to="/" className="text-white ps-3 pe-3 nav-link">Home</NavLink>
                    <NavLink to="/about" className="text-white ps-3 pe-3 nav-link">About</NavLink>
                    <NavLink to="/" className="text-white ps-3 pe-3 nav-link">Support</NavLink>
                    <NavLink to="/reviews" className="text-white ps-3 pe-3 nav-link">Reviews</NavLink>
                    <NavLink to="/ranking" className="text-white ps-3 pe-3 nav-link">Ranking</NavLink>
                </Nav>
                <Nav className="d-flex">
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faSearch} color={"#FFF"} size={ "1x" }/>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faUser} color={"#FFF"} size={ "1x" }/>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faShoppingCart} color={"#FFF"} size={ "1x" }/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}