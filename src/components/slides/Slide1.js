import React from "react";

import { Colors } from "../../Constants";

import reactUrl from "../../assets/ReactLogo.png";
import Beat from "../../assets/Beat.jpg";

export default class Slide1 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ textAlign: "center" }}>
        <img style={{ width: "40vw" }} src={reactUrl} />
        <div
          style={{ marginTop: "64px", fontSize: "32px", color: Colors.mint }}
        >
          Kostas Pelelis
        </div>
        <div
          style={{ marginTop: "10px", fontSize: "24px", color: Colors.tomato }}
        >
          Front End Developer
        </div>
        <img style={{ width: "30vw" }} src={Beat} />
      </div>
    );
  }
}
