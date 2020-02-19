import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { name, age, belt } = this.props;
    return (
      <div>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Belt: {belt}</h4>
      </div>
    );
  }
}

export default Ninjas;
