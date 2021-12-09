import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import '../styles/Contact.scss';

export default function Contact(props) {


  return (
    <>
      <Fade up duration={2000}>
        <Container className="contact-container">
          <Row>
            <Col className="col-11 max-auto">
              <div>
                <h1 className="title"><span className="underline--magical">Contact</span></h1>
              </div>
            </Col>
          </Row>
        </Container>
      </Fade>

    </>
  )
}
