import React, { Component } from "react";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "yoshi", age: "25", belt: "black", id: "1" },
      { name: "yoshi", age: "25", belt: "black", id: "2" },

      { name: "yoshi", age: "25", belt: "black", id: "3" }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };
  render() {
    return (
      <div className="App">
        <AddNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
