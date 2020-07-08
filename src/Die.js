import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(evt){
    evt.preventDefault()
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleToggle}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
