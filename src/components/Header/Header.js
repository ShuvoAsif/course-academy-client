import React from 'react';
import pic from '../../images/online-education.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={pic} width="30" height="30" alt="" />{' '}Course Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to='/'><Nav.Link href="#deets">Courses</Nav.Link></Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#features">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;