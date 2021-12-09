import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/Nav.scss';



export default function Navigate(props) {



  return (
    <>
      <Nav className="navigation justify-content-end fixed" activeKey="/home">
        <div className="d-flex">
          <Nav.Item>
            <Nav.Link className="nav-link" href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-1" onClick={props.executeScroll}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-2">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-3">
              Contact
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>

  )
}
