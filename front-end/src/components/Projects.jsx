import React from 'react'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Projects.scss';

export default function Projects(props) {


  return (
    <>
      <Fade>
        <Container>
          <Row>
            <Col className="col-12 col-sm-9">
              <div className="project-container">
                <h1 className="title bold"><span className="underline--magical">PROJECTS</span></h1>

              </div>
            </Col>
          </Row>
        </Container>

      </Fade>

    </>
  )
}
