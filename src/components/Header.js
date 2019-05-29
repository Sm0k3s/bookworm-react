import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const  Header = () => {
   return(
    <Navbar bg="light" expand="lg">
    <div className="container">
    <Navbar.Brand href="/">Book Worm</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/book-categories">Add category</Nav.Link>
        <Nav.Link href="/books">Add Book</Nav.Link>
        {/* <Nav.Link href="#link">Edit Book</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>)
}

export default Header;