import React from "react";

export default function Species(props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((elemento, index) => (
        <button key={index} onClick={props.handleSpecies} value={elemento}> {elemento} </button>
      ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  );
}
