import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import '../styles/Contact.scss';
import ContactForm from './ContactForm';

export default function Contact(props) {


  return (
    <>
      <Fade up duration={2000}>
        <Container className="contact-container">
          <Row>
            <Col className="col-11 max-auto">
              <div className="mb-5">
                <h1 className="title"><span className="underline--magical">Contact</span></h1>
              </div>
              <div>
                <p className="white contact-text">I would love to hear from you about future opportunities. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ContactForm></ContactForm>

            </Col>
          </Row>
        </Container>
      </Fade>

    </>
  )
}
