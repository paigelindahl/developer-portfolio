import React from 'react'

export function EachProject(props) {


  return (
    <>
      <div className="each-project h-100">
        <h3 className="bold uppercase ">{props.title}</h3>
        <hr />
        <p>{props.text}</p>
        <p className="bold">{props.language}</p>
        <p><a href={props.github} target="_blank" rel="noreferrer">Logo</a></p>
      </div>
    </>
  )
}
