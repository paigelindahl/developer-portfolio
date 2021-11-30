import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/HomePage.scss';

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
      <Container className="home-text mt-5 p-5" >
        <Container className="mt-5 pt-5">
          <h5>Hi! My name is</h5>
          <SplitText firstText="Paige Lindahl," secondText="Web developer."></SplitText>
        </Container>
      </Container>
    </>
  )
}
