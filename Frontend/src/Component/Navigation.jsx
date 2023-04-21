import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Link to='/'>Employee Dashboard</Link> */}
        <Navbar.Brand as={Link} to='/'>Employee Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            {/* <Link to='/form'>Employee Form</Link> */}
            <Nav.Link as={NavLink} to='/form'>Employee Form</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
  );
}

export default Navigation;