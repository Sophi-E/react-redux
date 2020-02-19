import React, { Component } from "react";
import Ninjas from "./components/Ninjas";

class App extends Component {
  render() {
    return (
      <div>
        <Ninjas name="Ryu" age="25" belt="black" />
      </div>
    );
  }
}

export default App;
