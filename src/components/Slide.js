import React from "react";

export default class Slide extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          width: "80vw",
          height: "90vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto"
        }}
      >
        {children}
      </div>
    );
  }
}
