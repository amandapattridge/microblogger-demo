import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";
import CharacterCountdown from "./CharacterCoundown";
import PopUp from "./PopUp";

class CreatePostForm extends Component {
  static propTypes = {
    post: PropTypes.shape({
      userId: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string
    }),
    updatePost: PropTypes.func,
    validatePostForm: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      showPopUp: false
    };
  }

  cancelPost = () => {
    if (this.props.post.body || this.props.post.userId) {
      this.showPopUp();
    } else {
      this.goToFeed();
    }
  };

  showPopUp = () => {
    this.setState({ showPopUp: true });
  };

  hidePopUp = () => {
    this.setState({ showPopUp: false });
  };

  goToFeed = () => {
    this.props.history.push("/");
  };

  updatePost = e => {
    e.preventDefault();
    this.props.updatePost(e.target.name, e.target.value);
  };

  validatePostForm = e => {
    e.preventDefault();
    this.props.validatePostForm();
  };

  render() {
    return (
      <div className="post">
        <div className="card mb-3">
          <div className="card-body">
            <form
              className="create-post-form"
              autoComplete="off"
              onSubmit={this.validatePostForm}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="userId"
                  aria-describedby="username"
                  value={this.props.post.userId}
                  onChange={this.updatePost}
                />
                {!this.props.isUserIdValid && (
                  <p className="text-danger mt-1">Username required</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="body"
                  rows="3"
                  aria-describedby="content"
                  value={this.props.post.body}
                  onChange={this.updatePost}
                />
                <div className="row mt-1">
                  <div className="col-md-11">
                    {!this.props.isBodyValid && (
                      <p className="text-danger">
                        Content must be between 10 and 140 characters
                      </p>
                    )}
                  </div>
                  <div className="col-md-1">
                    <CharacterCountdown
                      maxLength={140}
                      currentLength={this.props.post.body.length}
                    />
                  </div>
                </div>
              </div>
              <div className="form-gorup float-right">
                <Button
                  title="Cancel"
                  id="cancel"
                  styleName="btn-light mr-1"
                  type="button"
                  clickFn={this.cancelPost}
                />
                <Button
                  title="Submit"
                  id="post"
                  styleName="btn-primary"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
        <PopUp
          title="Are you sure you want to leave?"
          message="Your changes will not be saved"
          cancelButtonTitle="No"
          confirmButtonTitle="Yes"
          handleCancel={this.hidePopUp}
          handleConfirm={this.goToFeed}
          showPopUp={this.state.showPopUp}
        />
      </div>
    );
  }
}

export default withRouter(CreatePostForm);
