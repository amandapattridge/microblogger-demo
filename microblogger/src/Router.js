import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import App from "./App";
import CreatePost from "./components/create-post/CreatePost";
import PostFeed from "./components/feed/PostFeed";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" component={CreatePost} />
          <Route exact path="/feed" component={PostFeed} />
        </Switch>
      </BrowserRouter>
    );
  }
}
