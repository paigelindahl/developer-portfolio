import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/Nav.scss';



export default function Navigate(props) {



  return (
    <>
      <Nav className="navigation justify-content-end fixed" activeKey="/home">
        <div className="d-flex">
          <Nav.Item>
            <Nav.Link className="nav-link" href="/" onClick={e => {

              let scrollLocation = document.getElementById('home');
              e.preventDefault();
              scrollLocation && scrollLocation.scrollIntoView();
            }}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-1" onClick={e => {

              let scrollLocation = document.getElementById('about');
              e.preventDefault();
              scrollLocation && scrollLocation.scrollIntoView();
            }}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-2" onClick={e => {
              let scrollLocation = document.getElementById('projects');
              e.preventDefault();
              scrollLocation && scrollLocation.scrollIntoView();
            }}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-3" onClick={e => {
              let scrollLocation = document.getElementById('contact');
              e.preventDefault();
              scrollLocation && scrollLocation.scrollIntoView();
            }}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>

  )
}
