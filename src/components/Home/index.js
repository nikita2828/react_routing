import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
