import React, { Component } from "react";

export default class SinglePost extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
