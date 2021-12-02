import React from 'react';
import '../styles/Button.scss';

export default function Button(props) {


  return (
    <>
      <div className="btn btn-one" onClick={props.executeScroll}>
        <span>{props.text}</span>
      </div>

    </>
  )
}
