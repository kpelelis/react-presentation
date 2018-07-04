import React from "react";

import imgUrl from "../../assets/ComponentLifecycle.png";

import { Colors } from "../../Constants";
export default class Slide10 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right">
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Component Lifecycle
        </h1>
        <img src={imgUrl} />
        <ul style={{ fontSize: "24px", marginTop: "36px" }}>
          <li>
            Component re-renders when either its state or properties update
          </li>
          <li>User data don't necessarily update the state of the component</li>
          <li>Events need to be bubbled up</li>
        </ul>
        <p style={{ textAlign: "center", fontSize: "32px", marginTop: "64px" }}>
          Sounds expensive?
        </p>
      </div>
    );
  }
}
