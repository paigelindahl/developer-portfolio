import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/HomePage.scss';
import Button from './Button';

function SplitText(props) {

  return (
    <>
      <div className="split-text">
        <span aria-label={props.firstText} role={props.role} className="split-text">
          {props.firstText.split("").map(function (char, index) {
            let style = { "animationDelay": (index / 10) + "s" }
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
        <br />
        <span aria-label={props.secondText} role={props.role} className="split-text">
          {props.secondText.split("").map(function (char, index) {
            let style = { "animationDelay": (index / 10) + "s" }

            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
      </div>
    </>
  )
}

export default function Homepage(props) {


  return (
    <>
      <Container className="home-text d-flex align-items-center" >
        <Row>
          <Col>
            <h5>Hi! My name is</h5>
            <SplitText firstText="Paige Lindahl," secondText="Web developer."></SplitText>
            <Button text="About me" executeScroll={props.executeScroll}></Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
