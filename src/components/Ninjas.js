import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div key={ninja.id}>
          <h4>Name: {ninja.name}</h4>
          <h4>Age: {ninja.age}</h4>
          <h4>Belt: {ninja.belt}</h4>
        </div>
      );
    });

    return <div>{ninjaList}</div>;
  }
}

export default Ninjas;
