import React from "react";
import PropTypes from "prop-types";

const Post = ({ post: { userId, body } }) => (
  <div className="post">
    <div className="card mb-3">
      <div className="card-body">
        <h3>{`user${userId}`}</h3>
        <p>{body}</p>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  body: PropTypes.number,
  userId: PropTypes.string
};

export default Post;
