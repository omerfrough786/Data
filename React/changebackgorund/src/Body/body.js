import React, { Component } from "react";
import "./body.css";

export class body extends Component {
  state = {
    red: "0",
    green: "0",
    blue: "0",
    str: "rgba()"
  };
  
  ChangeRed(e) {
    this.setState({
      red: e.target.value,
      str:
        "rgba(" +
        this.state.red +
        "," +
        this.state.green +
        "," +
        this.state.blue +
        ")"
    });
  }
  ChangeGreen(e) {
    this.setState({
      green: e.target.value,
      str:
        "rgba(" +
        this.state.red +
        "," +
        this.state.green +
        "," +
        this.state.blue +
        ")"
    });
  }
  ChangeBlue(e) {
    this.setState({
      blue: e.target.value,
      str:
        "rgba(" +
        this.state.red +
        "," +
        this.state.green +
        "," +
        this.state.blue + 
        "," +
        0.1+
        ")"
    });
    
  }

  render() {

    //   let str = `rgb (${this.state.red},${this.state.green},${this.state.blue} )`

    return (
      <>
        <input
          className="inp"
          type="range"
          step="1"
          max="255"
          
          onChange={e => {
            this.ChangeRed(e);
          }}
        />
        <input
          className="inp"
          type="range"
          step="1"
          max="255"
          
          onChange={e => {
            this.ChangeGreen(e);
          }}
        />
        <input
          className="inp"
          type="range"
          step="1"
          max="255"
          
          onChange={e => {
            this.ChangeBlue(e);
          }}
        />

        <div className="div" style={{ backgroundColor: this.state.str}}></div>
        <h1 className="div">{this.state.str}</h1>
      </>
    );
  }
}

export default body;
