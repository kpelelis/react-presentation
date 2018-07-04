import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Colors } from "../../Constants";

export default class Slide8 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ width: "50vw" }}>
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Immutable Data
        </h1>
        <p>
          An object is called immutable when its state cannot be modified after
          its creation.
        </p>
        <div style={{ marginTop: "32px" }}>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`const mutable = { x: 1, y: 2 };
mutable.x = 3;

let immutable = { x: 1, y: 2};
immutable = Object.assign(immutable, { x: 3 });
// or in EcmaScript
immutable = { ...immutable, x: 3 };`}
          </SyntaxHighlighter>
        </div>
        <p style={{ marginTop: "32px" }}>
          Immutable data make problems like concurrency and memoization a lot
          easier. They also enable a more declarative way of programming as you
          don't have to think of your code as a sequence of operations but
          rather describe what your application would look like, given an
          immutable state.
        </p>
      </div>
    );
  }
}
