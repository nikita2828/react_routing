import React from "react";
import Loader from "../../components/Loader";

export const withRouter = (Component) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: true,
      };
    }

    showLoader = () => {
      this.setState({
        loading: true,
      });
    };
    hideLoader = () => {
      this.setState({
        loading: false,
      });
    };

    render() {
      return (
        <div>
          {this.state.loading && <Loader />}
          <Component
            {...this.props}
            showLoader={this.showLoader}
            hideLoader={this.hideLoader}
          />
        </div>
      );
    }
  };
};
