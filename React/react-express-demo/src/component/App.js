import React, { Component } from "react";
import Contact from "./Contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "null"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Contact />
      </React.Fragment>
    );
  }
}
