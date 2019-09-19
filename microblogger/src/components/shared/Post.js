import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="card mb-3">
          <div className="card-body">
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
