import React from "react";
import { connect, bindActionCreators } from "react-redux";
import { hot } from "react-hot-loader";

import { Colors } from "../Constants";

import Slide from "./Slide";
import slides from "./slides";

import * as SlideActions from "../actions/Slides";

import "../style.css";

function pad(num) {
  var s = String(num);
  while (s.length < 2) {
    s = "0" + s;
  }
  return s;
}
class App extends React.Component {
  state = {
    seconds: 0,
    timerActive: false
  };

  timer = null;

  onKeyDown = e => {
    const { nextSlide, previousSlide, slideIndex } = this.props;
    switch (e.keyCode) {
      case 39:
        slideIndex < slides.length - 1 && nextSlide();
        break;
      case 37:
        previousSlide();
        break;
      case 83:
        this.setState({ timerActive: !this.state.timerActive });
      default:
        break;
    }
  };

  tick = () => {
    const { seconds } = this.state;
    this.setState({ seconds: seconds + 1 });
  };

  componentDidUpdate(prevProps) {
    const { timerActive } = this.state;
    const { slideIndex } = this.props;

    if (!timerActive && this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else if (timerActive && !this.timer) {
      this.timer = setInterval(this.tick, 1000);
    }

    if (prevProps.slideIndex !== slideIndex) {
      window.location.hash = `${slideIndex}`;
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
    clearInterval(this.timer);
  }

  render() {
    const { slideIndex } = this.props;
    const { seconds, timerActive } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            background: "#000028",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Slide>{React.createElement(slides[slideIndex])}</Slide>
        </div>
        <div
          style={{
            color: timerActive ? "white" : Colors.tomato,
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "24px",
            fontFamily: "Roboto",
            zIndex: 100
          }}
        >{`${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`}</div>
      </React.Fragment>
    );
  }
}

const state = store => ({
  slideIndex: store.slideIndex
});

const connectedApp = connect(state, SlideActions)(App);

export default hot(module)(connectedApp);
