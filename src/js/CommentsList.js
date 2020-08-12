import React from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";
import "../styles/CommentsList.css";

function CommentsList(props) {
  return (
    <ul className="comments__list">
      {props.comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.id} />;
      })}
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentsList;
