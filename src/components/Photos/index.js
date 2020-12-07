import React, { Component } from "react";

import { withRouter } from "../../hocs/withLoader/index";

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }
  async getLoading() {
    this.props.showLoader();
    this.setState({
      loading: true,
    });
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    this.props.hideLoader();
    this.setState({
      photos: data,
    });
  }
  async componentDidMount() {
    await this.getLoading();
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {photos.map((post) => (
            <li key={post.id}>
              {post.title}
              <img src={post.url} alt="no_photo"></img>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default withRouter(Photos);
