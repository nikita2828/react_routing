import React, { Component } from "react";

import { withRouter } from "../../hocs/withLoader/index";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
    };
  }
  async getLoading() {
    this.props.showLoader();
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());
    this.props.hideLoader();
    this.setState({
      posts: data,
    });
  }

  async componentDidMount() {
    await this.getLoading();
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default withRouter(Posts);
