import React, { Component } from "react";
import Ninjas from "./components/Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "yoshi", age: "25", belt: "black", id: "1" },
      { name: "yoshi", age: "25", belt: "black", id: "1" },

      { name: "yoshi", age: "25", belt: "black", id: "1" }
    ]
  };
  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
