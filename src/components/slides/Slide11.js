import React from "react";

import { Colors } from "../../Constants";

import vdomImg from "../../assets/VDOM.png";

export default class Slide11 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ width: "50vw" }}>
        <h1
          style={{
            fontSize: "64px",
            color: Colors.tomato,
            marginBottom: "16px"
          }}
        >
          Virtual DOM
        </h1>
        <img style={{ width: "50vw", marginBottom: "16px" }} src={vdomImg} />
        <ul style={{ fontSize: "24px" }}>
          <li>Messing with the real DOM is expensive.</li>
          <li>
            React keeps an in-memory copy of the DOM called Virtual DOM (VDOM).
          </li>
          <li>Component updates are batched together</li>
          <li>
            React calculates the minimum amount of operations that are need to
            sync VDOM with the real DOM
          </li>
          <li>Batched real DOM operations</li>
        </ul>
      </div>
    );
  }
}
