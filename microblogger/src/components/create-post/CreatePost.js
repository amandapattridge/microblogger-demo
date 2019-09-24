import React, { Component } from "react";
import CreatePostForm from "./../shared/CreatePostForm";
import { Alert } from "./../shared/Alert";

class CreatePost extends Component {
  state = {
    post: {
      userId: "",
      title: "",
      body: ""
    },
    isUserIdValid: true,
    isBodyValid: true,
    isFormValid: true,
    postSuccess: false,
    postError: false
  };

  successMessage = "Your post was created successfully!";
  errorMessage = "There was an error creating your post";

  updatePost = (name, value) => {
    const post = { ...this.state.post };
    post[name] = value;
    this.setState({ post });
  };

  submitPost = () => {
    if (this.state.isFormValid) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(this.state.post)
      })
        .then(res => {
          console.log(res);
          this.setState({ postSuccess: true, postError: false });
        })
        .catch(err => {
          this.setState({ postSuccess: false, postError: true });
        });
    }
  };

  validatePostForm = () => {
    //remove any success/error messages displayed on previous submission attempts
    this.setState({ postSuccess: false, postError: false }, () => {
      const isUserIdValid = this.state.post.userId.length > 0;

      const isBodyValid =
        this.state.post.body.length >= 10 && this.state.post.body.length <= 140;

      const isFormValid = isUserIdValid && isBodyValid;
      this.setState({ isUserIdValid, isFormValid, isBodyValid }, () => {
        this.submitPost();
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
                {this.state.postSuccess && (
                  <Alert
                    alertMessage={this.successMessage}
                    alertType="alert-success"
                  />
                )}
                {this.state.postError && (
                  <Alert
                    alertMessage={this.errorMessage}
                    alertType="alert-danger"
                  />
                )}
                <CreatePostForm
                  updatePost={this.updatePost}
                  validatePostForm={this.validatePostForm}
                  post={this.state.post}
                  isBodyValid={this.state.isBodyValid}
                  isUserIdValid={this.state.isUserIdValid}
                />
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
