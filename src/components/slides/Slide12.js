import React from "react";

import doomLogo from "../../assets/DoomLogo.jpg";
import reactLogo from "../../assets/ReactLogo.png";

import { Colors } from "../../Constants";
export default class Slide12 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        className="flip-in-ver-right"
      >
        <img style={{ width: "30vw" }} src={doomLogo} />
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Doom 3 vs React
        </h1>
        <img style={{ marginTop: "50px", width: "30vw" }} src={reactLogo} />
      </div>
    );
  }
}
