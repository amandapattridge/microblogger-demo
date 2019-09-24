import React, { Component } from "react";
import { Header } from "../shared/Header";
import { Post } from "../shared/Post";
import { Button } from "../shared/Button";
import { Alert } from "../shared/Alert";

class PostFeed extends Component {
  state = {
    posts: [],
    getPostsSuccess: true
  };

  errorMessage = "There was an error retrieving your post feed";

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts, getPostsSuccess: true });
      })
      .catch(err => {
        this.setState({ getPostsSuccess: false });
      });
  };

  goToPostPage = () => {
    this.props.history.push("/post");
  };

  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="row col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body header-container">
                <div className="button-container">
                  <Button
                    title="Post"
                    clickFn={this.goToPostPage}
                    styleName="btn-primary btn-sm"
                  />
                </div>
                <Header title="Microblogger" />
              </div>
            </div>
            <div className="card feed-container mt-3">
              {/* If posts are retrieved successfully, show posts. Otherwise, show error message */}
              <div className="card-body">
                {this.state.getPostsSuccess ? (
                  this.state.posts.map(post => (
                    <Post post={post} key={post.id} />
                  ))
                ) : (
                  <Alert
                    alertMessage={this.errorMessage}
                    alertType="alert-danger"
                  />
                )}
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
