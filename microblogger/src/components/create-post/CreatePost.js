import React, { Component } from "react";
import CreatePostForm from "./../shared/CreatePostForm";

class CreatePost extends Component {
  state = {
    post: {
      userId: "",
      title: "",
      body: ""
    }
  };

  addPost = post => {
    this.setState({ post }, () => {
      console.log(this.state);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post)
      })
        .then(res => {
          this.props.history.push("/feed");
        })
        .catch(err => {
          console.log("err", err);
        });
    });
  };

  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="row col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card create-post-container">
              <div className="card-body">
                <CreatePostForm addPost={this.addPost} />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
