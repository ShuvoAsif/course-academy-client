import React, { useContext } from 'react';
import pic from '../../images/online-education.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

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
                            <Link to='/Blog'><Nav.Link href="#deets">Blog</Nav.Link></Link>
                            <Nav.Link href="FAQ">FAQ</Nav.Link>
                            {
                                user ?
                                    <button className='btn-logout' onClick={logOut}>Log out</button>
                                    :
                                    <>
                                        <Link to="/login"><Nav.Link href="#deets">Login</Nav.Link></Link>
                                        <Link to="/register"><Nav.Link href="#deets">Sign up</Nav.Link></Link>
                                    </>
                            }
                        </Nav>
                        <Nav.Link>{user?.name} </Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;