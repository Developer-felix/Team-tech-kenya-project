import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavbarElement extends React.Component {
    render() {
        return (
          <React.Fragment>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">TeamTechKenya</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Service1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Service2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Service3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Service4</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">MeetUs</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Account
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </React.Fragment>
           
        )
    }
}

export default NavbarElement;


