import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () =>
{
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/add-service">Add Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/manage-services">Manage Services</Nav.Link>
                        {
                            user.email && <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        }
                        {
                            user.email ? <div>
                                <Button as={Link} to="/my-orders" variant="outline-light" className="ms-3">My Orders</Button>
                                <Button onClick={logOut} variant="light" className="ms-3">Log Out</Button>
                            </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;