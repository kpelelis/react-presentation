import React from "react";

import { Colors } from "../../Constants";

export default class Slide2 extends React.Component {
  render() {
    return (
      <div
        onKeyDown={this.onKeyDown}
        className="flip-in-ver-right"
        style={{ textAlign: "left", width: "50vw" }}
      >
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          React Components are pure funcons
        </h1>
        <p
          style={{
            fontSize: "92px",
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginBottom: "64px"
          }}
        >
          V = C(S, P)
        </p>
        <p style={{ fontSize: "32px", fontFamily: "Roboto" }}>
          C: Component
          <br />
          S: State
          <br />
          P: Properties
          <br />
          V: View (UI Result)
          <br />
        </p>
      </div>
    );
  }
}
