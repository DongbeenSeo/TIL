import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import Value from "./Value";
import Control from "./Control";
import * as actions from "../actions";

class Counter extends Component {
  setRandomColor = () => {
    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200)
    ];
    this.props.handleSetColor(color);
  };
  render() {
    const color = this.props.color;
    const style = {
      background: `rgb(${color[0]} , ${color[1]}, ${color[2]})`
    };
    return (
      <div style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.counter.number,
    color: state.ui.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => {
      dispatch(actions.incr());
    },
    handleDecrement: () => {
      dispatch(actions.decr());
    },
    handleSetColor: color => {
      dispatch(actions.setColor(color));
    }
  };
  // return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
