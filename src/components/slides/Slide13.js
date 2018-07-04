import React from "react";

import imgUrl from "../../assets/Doom.png";

import { Colors } from "../../Constants";
export default class Slide13 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right">
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Doom 3 Game Engine
        </h1>
        <img src={imgUrl} />
      </div>
    );
  }
}
