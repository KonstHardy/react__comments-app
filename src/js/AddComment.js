import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/AddComment.css";

function AddComment({ onCreate }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (name && text) {
      onCreate({ name: name.trim(), text: text.trim() });
      setName("");
      setText("");
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <div className="form__comment">
          <input
            className="form__inputName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          ></input>
          <button className="btn__submit" type="submit">
            Add comment
          </button>
        </div>
        <textarea
          className="form__inputText"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter your comment"
          required
        ></textarea>
      </form>
      <img className="img__react" src="./../logo192.png" />
    </div>
  );
}

AddComment.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddComment;
