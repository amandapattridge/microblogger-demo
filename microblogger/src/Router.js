import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import App from "./App";
import CreatePost from "./components/create-post/CreatePost";
import PostFeed from "./components/feed/PostFeed";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/post" component={CreatePost} />
      <Route exact path="/" component={PostFeed} />
    </Switch>
  </BrowserRouter>
);

export default Router;
