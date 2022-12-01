import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          {console.log(this.props.animals)}
          {this.props.animals.map((elemento, index) => (
            //Si se usan llaves en una arrow function se debe retornar
            //Si se usan parentesis no necesita return
            <div key={index}>
              <h5>{elemento.name}</h5>
              <img src={elemento.image} alt={elemento.name} width="300px" />
              <span>{elemento.specie}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}
