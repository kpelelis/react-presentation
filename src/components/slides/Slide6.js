import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Colors } from "../../Constants";

export default class Slide6 extends React.Component {
  render() {
    return (
      <div className="flip-in-ver-right" style={{ width: "50vw" }}>
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Pure functions
        </h1>
        <p>
          A function is called pure when given the same input it always produces
          the same output. That means no side effects or mutations on shared
          data.
        </p>
        <div style={{ marginTop: "32px" }}>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`sin(x); // Pure
sha256(s); // Pure
length(array); // Pure

random(); // Impure
console.log() // Impure
`}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}
