import React from "react";
import { hot } from "react-hot-loader";

import { Colors } from "../../Constants";

class Slide3 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ textAlign: "center" }}>
        <h1
          style={{ fontWeight: "bold", fontSize: "64px", color: Colors.mint }}
        >
          Forget Everything you know
        </h1>
      </div>
    );
  }
}

export default hot(module)(Slide3);
