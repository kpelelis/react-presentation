import React from "react";

import { Colors } from "../../Constants";

export default class Slide2 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "64px", color: Colors.mint }}>
          I ❤️ functional programming
        </h1>
      </div>
    );
  }
}
