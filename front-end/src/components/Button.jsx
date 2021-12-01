import React from 'react';
import '../styles/Button.scss';

export default function Button(props) {


  return (
    <>
      <div className="btn btn-one">
        <span>{props.text}</span>
      </div>

    </>
  )
}
