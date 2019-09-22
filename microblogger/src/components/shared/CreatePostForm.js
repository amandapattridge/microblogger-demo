import React, { Component } from "react";
import { Button } from "./Button";
import { CharacterCountdown } from "./CharacterCoundown";

class CreatePostForm extends Component {
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
            <form className="create-post-form" onSubmit={this.validatePostForm}>
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
                  styleName="btn-light mr-1"
                  type="button"
                />
                <Button title="Submit" styleName="btn-primary" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePostForm;
