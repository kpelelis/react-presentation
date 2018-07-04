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
          What the hell is React anyway?
        </h1>
        <p>
          React is a (rather controversial) unidirectional data flow framework
          developed by Facebook, that uses reusable, highly cohesive and loosely
          coupled components for building user interfaces (UI).
        </p>
        <p>
          In MVC (Model-View-Controller) terms, React stands for the View(V).
        </p>
        <p>
          Internally, it uses a data structure (Virtual DOM) to represent the
          Component tree which is optimized for rendering.This approach enables
          the declarative API of React and it is platform agnostic, meaning it
          can be used both for web as well as other platforms (mobiles, TVs, VR
          etc)
        </p>

        <p style={{ fontStyle: "italic" }}>Learn once write anywhere</p>
      </div>
    );
  }
}
