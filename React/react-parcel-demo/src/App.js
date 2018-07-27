import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Contact from "./components/Contact.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h1>My Contact</h1> */}
        <Contact />
      </React.Fragment>
    );
  }
}
export default hot(module)(App);
