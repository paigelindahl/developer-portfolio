import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

import '../styles/About.scss';
import '../styles/General.scss';

export default function About(props) {



  return (
    <>
      <Fade up duration={2000}>
        <Container className="about-container">
          <Row>
            <Col className="col-12 col-sm-9">
              <div ref={props.myRef}>
                <h1 className="title"><span className="underline--magical">About</span></h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-sm-9">
              <div>
                <p><span className="hi-my-name-is">Hi! My name is Paige,</span>  and I am a full stack developer with a propensity for front-end devlopment. I am based in Edinburgh but originally from Vancouver, Canada. My journey in web devlopement started fairly recently when I completed a three month intensive bootcamp through Lighthouse Labs in 2020 and I plan to keep this momentum going and pursue a career in web development.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-sm-9">
              <div>
                <p><span class="turquoise bold">Languages:</span> Javascript, HTML, CSS, Ruby</p>
                <p><span class="turquoise bold">Frameworks, Libraries and Environments:</span> NodeJS, ReactJS, AJAX, Express, EJS, jQuery, Bootstrap, SASS</p>
                <p><span class="turquoise bold">Systems, Databases:</span> SQL, Git</p>
                <p><span class="turquoise bold">Testing:</span> Jest, Cyprus, Mocha, Chai</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-sm-9">
              <div>
                <p><span class="turquoise bold">Education:</span></p>
                <ul>
                  <li>Light House Labs (2020)</li>
                  <li>University of British Colombia (2012)</li>
                </ul>
              </div>

            </Col>
          </Row>
        </Container>
      </Fade>












    </>
  )
}
