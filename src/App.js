import { Component } from "react";
import "./App.css";
import wSound from "./sounds/crash.mp3";
import aSound from "./sounds/kick-bass.mp3";
import sSound from "./sounds/snare.mp3";
import dSound from "./sounds/tom-1.mp3";
import jSound from "./sounds/tom-2.mp3";
import kSound from "./sounds/tom-3.mp3";
import lSound from "./sounds/tom-4.mp3";
class App extends Component {
  playW = () => {
    new Audio(wSound).play();
  };
  playA = () => {
    new Audio(aSound).play();
  };
  playS = () => {
    new Audio(sSound).play();
  };
  playD = () => {
    new Audio(dSound).play();
  };
  playJ = () => {
    new Audio(jSound).play();
  };
  playK = () => {
    new Audio(kSound).play();
  };
  playL = () => {
    new Audio(lSound).play();
  };
  play = () => {
    new Audio(null);
  };
  onEvent = (event) => {
    const keyValue = event.key.toLowerCase();
    switch (keyValue) {
      case "w":
        this.playW();
        break;
      case "a":
        this.playA();
        break;
      case "s":
        this.playS();
        break;
      case "d":
        this.playD();
        break;
      case "j":
        this.playJ();
        break;
      case "k":
        this.playK();
        break;
      case "l":
        this.playL();
        break;
      default:
        this.play();
    }
  };

  render() {
    return (
  
  <div className="App">
        {window.addEventListener("keydown", this.onEvent)}
        <h1 className="heading">
          Drum{"  "}
          <img
            src="https://www.linkpicture.com/q/drum_6.png"
            alt="drum"
            className="drum-logo"
          />
          Kit
        </h1>
        <div className="images-container">
          <button className="btn" type="button" onClick={this.playW}>
            <img
              src="/images/crash.png"
              alt="img"
              className="image"
            />
              <p className="latter">W</p>
          </button>
          <button className="btn" type="button" onClick={this.playA}>
            <img
              src="/images/kick.png"
              alt="img"
              className="image"
            />
              <p className="latter">A</p>
          </button>
          <button className="btn" type="button" onClick={this.playS}>
            <img
              src="/images/snare.png"
              alt="img"
              className="image"
            />
              <p className="latter">S</p>
          </button>
          <button className="btn" type="button" onClick={this.playD}>
            <img
              src="/images/tom1.png"
              alt="img"
              className="image"
            />
              <p className="latter">D</p>
          </button>
          <button className="btn" type="button" onClick={this.playJ}>
            <img
              src="/images/tom2.png"
              alt="img"
              className="image"
            />
              <p className="latter">J</p>
          </button>
          <button className="btn" type="button" onClick={this.playK}>
            <img
              src="/images/tom3.png"
              alt="img"
              className="image"
            />
              <p className="latter">K</p>
          </button>
          <button className="btn" type="button" onClick={this.playL}>
            <img
              src="/images/tom4.png "
              alt="img"
              className="image"
            />
            <p className="latter">L</p>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
