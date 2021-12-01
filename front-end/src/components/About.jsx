import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/About.scss';
import '../styles/General.scss';

export default function About(props) {


  return (
    <>
      <Container className="about-container">
        <Row>
          <Col>
            <div >
              <h1 className="title"><span className="underline--magical">About</span></h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p><span className="hi-my-name-is">Hi! My name is Paige,</span>  and I am a full stack developer with a propensity for front-end devlopment. I am based in Edinburgh but originally from Vancouver, Canada. My journey in web devlopement started fairly recently when I completed a three month intensive bootcamp through Lighthouse Labs in 2020 and I plan to keep this momentum going and pursue a career in web development.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p><span>Languages:</span> Javascript, HTML, CSS, Ruby</p>
              <p><span>Frameworks, Libraries and Environments:</span> NodeJS, ReactJS, AJAX, Express, EJS, jQuery, Bootstrap, SASS, Wordpress</p>
              <p><span>Systems, Databes:</span> SQL, Git</p>
              <p><span>Testing:</span> Jest, Cyprus, Mocha, Chai</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p><span>Education:</span></p>
              <ul>
                <li>Light House Labs (2020)</li>
                <li>University of British Colombia (2012)</li>
              </ul>
            </div>

          </Col>
        </Row>
      </Container>












    </>
  )
}
