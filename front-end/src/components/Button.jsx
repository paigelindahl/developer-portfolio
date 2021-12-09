import React from 'react';
import '../styles/Button.scss';

export default function Button(props) {



  return (
    <>
      <a href="/" onClick={e => {
        let sectionName = props.name;
        let scrollLocation = document.getElementById(sectionName);
        e.preventDefault();
        scrollLocation && scrollLocation.scrollIntoView();
      }}>
        <div className="btn btn-one">
          <span>{props.text}</span>
        </div>
      </a>

    </>
  )
}
