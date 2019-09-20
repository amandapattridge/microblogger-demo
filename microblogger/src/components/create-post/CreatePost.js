import React, { Component } from "react";
import CreatePostForm from "./../shared/CreatePostForm";

class CreatePost extends Component {
  state = {
    post: {
      userId: "",
      title: "",
      body: ""
    },
    isUserIdValid: false,
    isBodyValid: false,
    isFormValid: false
  };

  submitPost = () => {
    console.log(this.state);

    if (this.state.isFormValid) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(this.state.post)
      })
        .then(res => {
          console.log(res);
          this.props.history.push("/feed");
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  };

  validateCreatePostForm = () => {
    const isUserIdValid = this.state.post.userId.length > 0;

    const isBodyValid =
      this.state.post.body.length >= 10 && this.state.post.body.length <= 140;

    const isFormValid = isUserIdValid && isBodyValid;
    this.setState({ isUserIdValid, isFormValid, isBodyValid }, () => {
      this.submitPost();
    });
  };

  addPost = post => {
    this.setState({ post }, () => {
      this.validateCreatePostForm();
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
