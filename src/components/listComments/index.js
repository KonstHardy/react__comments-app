import React from "react";
import PropTypes from "prop-types";
import ItemComment from "../itemComment";
import "./ListComments.css";

function ListComments(props) {
  return (
    <ul className="comments__list">
      {props.comments.map((comment) => {
        return <ItemComment comment={comment} key={comment.id} />;
      })}
    </ul>
  );
}

ListComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListComments;
