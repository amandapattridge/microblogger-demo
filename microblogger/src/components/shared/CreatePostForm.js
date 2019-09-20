import React, { Component } from "react";
import Button from "./Button";

class CreatePostForm extends Component {
  username = React.createRef();
  content = React.createRef();

  submitPost = e => {
    e.preventDefault();

    const post = {
      userId: this.username.current.value,
      body: this.content.current.value,
      title: ""
    };
    this.props.addPost(post);
  };

  render() {
    return (
      <div className="post" onSubmit={this.submitPost}>
        <div className="card mb-3">
          <div className="card-body">
            <form className="create-post-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  ref={this.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  ref={this.content}
                />
              </div>
              <div className="form-gorup float-right">
                <Button
                  title="Cancel"
                  styleType="btn-secondary mr-1"
                  type="submit"
                />
                <Button title="Submit" styleName="btn-primary" />
                {/* <button className="btn btn-secondary mr-1">Cancel</button>
                <button type="submit" className="btn btn-primary"> 
                  Submit
                </button>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePostForm;
