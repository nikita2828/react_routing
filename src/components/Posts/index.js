import React, { Component } from "react";

import { withRouter } from "../../hocs/withLoader/index";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
      search: "",
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
        <input
          onChange={(e) =>
            this.setState({ search: e.target.value.toLowerCase() })
          }
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
        <h1>{this.props.title}</h1>
        <ul>
          {posts
            .filter((post) =>
              post.name.toLowerCase().includes(this.state.search)
            )
            .map((post) => (
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
