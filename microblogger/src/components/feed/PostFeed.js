import React, { Component } from "react";
import Header from "../shared/Header";
import Post from "./../shared/Post";

class PostFeed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="row col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body header-container">
                <Header />
              </div>
            </div>
            <div className="card feed-container mt-3">
              <div className="card-body">
                {this.state.posts.map(post => (
                  <Post post={post} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default PostFeed;
