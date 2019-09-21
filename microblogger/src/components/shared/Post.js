import React from "react";

export const Post = props => (
  <div className="post">
    <div className="card mb-3">
      <div className="card-body">
        <h3>{`user${props.post.userId}`}</h3>
        <p>{props.post.body}</p>
      </div>
    </div>
  </div>
);
