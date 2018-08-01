import * as types from "./ActionTypes";

export function incr() {
  return {
    type: types.INCREMENT
  };
}

export function decr() {
  return {
    type: types.DECREMENT
  };
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  };
}
