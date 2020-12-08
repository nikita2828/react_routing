import React, { Component } from "react";

export default class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((res) => res.json());
    this.setState({
      title: post.name,
      body: post.username,
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{body}</h4>
      </div>
    );
  }
}
