import React from "react";

import { Colors } from "../../Constants";

export default class Slide2 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right">
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Core Concepts
        </h1>
        <ul style={{ fontSize: "24px", marginTop: "36px" }}>
          <li>Pure Functions</li>
          <li>Immutable Data</li>
        </ul>
      </div>
    );
  }
}
