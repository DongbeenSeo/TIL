import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "null"
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              name: "dongbeen"
            });
          }}
        >
          Click me!
        </button>
        <h1>React-express-demo!!!</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
