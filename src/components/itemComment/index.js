import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../context";
import "./ItemComment.css";

function ItemComment({ comment }) {
  const { removeComment } = useContext(Context);

  return (
    <li className="comment__item">
      <div className="comment__body">
        <div className="comment__title">
          <span className="comment__author">{comment.name}</span>
          <p className="comment__time">{comment.date}</p>
        </div>
        <p className="comment__text">{comment.text}</p>
      </div>

      <button
        class="btn__remove"
        onClick={removeComment.bind(null, comment.id)}
      >
        <span class="btn__line"></span>
        <span class="btn__line"></span>
      </button>
    </li>
  );
}

ItemComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default ItemComment;
