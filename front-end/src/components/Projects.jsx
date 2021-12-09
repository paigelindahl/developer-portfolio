import React from 'react'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Projects.scss';
import { EachProject } from './EachProject';

export default function Projects(props) {


  return (
    <>
      <Container className="project-container" >
        <Fade up duration={2000}>
          <Row>
            <Col className="col-12">
              <div className="mb-5">
                <h1 className="title bold"><span className="underline--magical">PROJECTS</span></h1>
              </div>
            </Col>
          </Row>
        </Fade>
        <Fade up duration={2000}>
          <Row>
            <Col className="col-12 col-lg-4 my-3">
              <EachProject title="Ukiyo" text="A one stop wellness app intended to alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journal and todo list organizer." language="React JS / Material UI / PSQL / Node / Express" github="https://github.com/paigelindahl/ukiyo" />
            </Col>

            <Col className="col-12 col-lg-4 my-3">
              <EachProject title="Jungle" text="Mini e-commerce application. Allows users to select and purchase products using Stripe." language="ERB / Bootstrap / Ruby on Rails" github="https://github.com/paigelindahl/Jungle" />
            </Col>
            <Col className="col-12 col-lg-4 my-3">
              <EachProject title="Tweeter" text="Single page application Twitter clone." language="HTML / CSS / JS / jQuery / AJAX / Node / Express" github="https://github.com/paigelindahl/tweeter" />
            </Col>
          </Row>
        </Fade>
        <Fade up duration={2000}>
          <Row className="flex justify-content-center">
            <Col className="col-12 col-lg-4 my-3">
              <EachProject title="Pizzeria" text="Pizza pickup application, allowing users to order pizza online from a local pizza parlour. Admin are able to monitor orders and send an SMS using Twilio when orders are ready for pickup." language="JS / Bootstrap / PSQL / Node / Express" github="https://github.com/paigelindahl/kpe" />
            </Col>
            <Col className="col-12 col-lg-4 my-3">
              <EachProject title="Tinyapp" text="Full stack URL shortener. Allows users to add, edit and delete shortened URLs that they have generated." language="HTML / CSS / EJS / JS / Node / Express" github="https://github.com/paigelindahl/tinyapp" />
            </Col>

          </Row>
        </Fade>
      </Container>
      <div id="contact"></div>


    </>
  )
}
