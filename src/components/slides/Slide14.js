import React from "react";

import imgUrl from "../../assets/ReactArchitecture.png";

import { Colors } from "../../Constants";
export default class Slide14 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right">
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>React</h1>
        <img src={imgUrl} />
      </div>
    );
  }
}
