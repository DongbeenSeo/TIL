import React, { Component } from "react";
import Contact from "./components/Contact.js";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>My Contact</h1>
        <Contact />
      </React.Fragment>
    );
  }
}
