import React from 'react';
import { BsGithub } from "react-icons/bs";

export function EachProject(props) {


  return (
    <>

      <div className="each-project h-100">
        <div className="d-flex">
          <h3 className="bold uppercase ">{props.title}</h3>
          <a href={props.github} target="_blank" rel="noreferrer"><BsGithub className="github-icon turquoise" /></a>
        </div>
        <hr />
        <p>{props.text}</p>
        <p className="bold">{props.language}</p>
      </div>
    </>
  )
}
