import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Button from '../components/Button';

import '../styles/About.scss';
import '../styles/General.scss';

export default function About(props) {


  return (
    <>
      <Fade up duration={2000} >
        <Container className="about-container" >

          <div className="border">
            <Row>
              <Col className="col-11 mx-auto">
                <div className="mb-5" >
                  <h1 className="title"><span className="underline--magical">About</span></h1>
                </div>
              </Col>
            </Row>
            <Row >
              <Col className="col-11 col-md-5 mx-auto">
                <div>
                  <p><span className="hi-my-name-is">Hi! My name is Paige,</span>  and I am a full stack developer with a propensity for front-end devlopment. I am based in Edinburgh but originally from Vancouver, Canada. My journey in web devlopement started fairly recently when I completed a three month intensive bootcamp through Lighthouse Labs in 2020 and I plan to keep this momentum going and pursue a career in web development.</p>
                </div>
              </Col>
              <Col className="col-11 col-md-5 mx-auto">
                <div>
                  <p><span className="turquoise bold">Languages:</span> Javascript, HTML, CSS, Ruby</p>
                  <p><span className="turquoise bold">Frameworks, Libraries and Environments:</span> NodeJS, ReactJS, AJAX, Express, EJS, jQuery, Bootstrap, SASS, SCSS</p>
                  <p><span className="turquoise bold">Systems, Databases:</span> SQL, Git</p>
                  <p><span className="turquoise bold">Testing:</span> Jest, Cyprus, Mocha, Chai</p>
                  <p><span className="turquoise bold">Education:</span></p>
                  <ul className="list-circle">
                    <li>Light House Labs (2020)</li>
                    <li>University of British Colombia (2012)</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row >
              <Col className=" mx-auto">
                <div className="center-col mt-5">
                  <Button text="View my Projects" name="projects" />
                </div>
              </Col>
            </Row>
          </div>
        </Container >
      </Fade>
      <div id='projects'></div>












    </>
  )
}
