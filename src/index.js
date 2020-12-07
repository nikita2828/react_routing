import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts/index";
import Photos from "./components/Photos/index";
import Home from "./components/Home/index";
import NotFound from "./components/NotFound/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import SinglePost from "./components/SinglePost/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Home {...props} title="Home page" />}
          ></Route>
          <Route
            exact
            path="/posts"
            component={(props) => <Posts {...props} title="Posts page" />}
          ></Route>
          <Route
            path="/photos"
            component={(props) => <Photos {...props} title="Photos page" />}
          ></Route>
          <Route
            path="/posts/:id"
            component={(props) => <SinglePost {...props} title="Single post" />}
          ></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
