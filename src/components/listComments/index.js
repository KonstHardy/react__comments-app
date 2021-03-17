import React from "react";
import PropTypes from "prop-types";
import ItemComment from "../itemComment";
import "./ListComments.css";

function ListComments(props) {
  return (
    <>
      <h2 className="subtitle">List of comments:</h2>
      <ul className="comments__list">
        {props.comments.length ? (
          props.comments.map((comment) => {
            return <ItemComment comment={comment} key={comment.id} />;
          })
        ) : (
          <p className="emptyCommenstList">
            Here are no comments. Write the first comment.
          </p>
        )}
      </ul>
    </>
  );
}

ListComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListComments;
