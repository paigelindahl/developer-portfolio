import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';

const port = process.env.PORT || 8080;

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    $("#contact-form")[0].reset();
  };
  return (
    <Fade up duration={2000}>
      <form onSubmit={handleSubmit} id="contact-form">
        <Row>
          <Col className="col-12 col-lg-8">
            <div className="contact-input">
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="contact-input">
              {/* <label htmlFor="email">Email:</label> */}
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="contact-input">
              {/* <label htmlFor="message">Message:</label> */}
              <textarea id="message" placeholder="Message" required />
            </div>
            <button className="btn btn-one" type="submit"><span>{status}</span></button>
          </Col>
        </Row>
      </form>
    </Fade>
  );
};

export default ContactForm;