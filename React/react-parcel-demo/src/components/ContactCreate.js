import React, { Component } from "react";
import propTypes from "prop-types";

import Contact from "./Contact";

export default class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(nextState);
    this.setState(nextState);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    this.props.onCreate(contact);

    this.setState({
      name: "",
      phone: ""
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>Create Contact</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </React.Fragment>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: propTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.log("onCreate not defined");
  }
};
