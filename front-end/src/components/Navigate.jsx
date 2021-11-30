import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/Nav.scss'

export default function Navigate(props) {


  return (
    <>
      <Nav className="justify-content-end navigation" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="nav-link" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-3">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>

  )
}
