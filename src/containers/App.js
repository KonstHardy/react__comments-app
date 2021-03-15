import React from "react";
import Context from "../context";
import ListComments from "../components/listComments";
import AddComment from "../components/addComment";
import GetDate from "../components/getDate";
import "./App.css";

function App() {
  let savedComments;

  const defaultComments = [
    {
      id: 3,
      name: "Iron Man",
      text: "Yeah it is.",
      date: "05/07/2020 в 21:07:42 ",
    },
    {
      id: 2,
      name: "Professor Hulk",
      text: "No, man! React is realy cool!",
      date: "05/07/2020 в 16:27:38",
    },
    {
      id: 1,
      name: "Peter Parker",
      text: "React is too hard :(",
      date: "05/07/2020 в 14:53:05",
    },
  ];

  try {
    savedComments =
      JSON.parse(localStorage.getItem("commentsArr")) || defaultComments;
  } catch (error) {
    savedComments = [];
    localStorage.removeItem("commentsArr");
  }

  const [comments, setComments] = React.useState(
    savedComments || defaultComments
  );

  function addNewComment(comment) {
    const newComment = {
      id: Date.now(),
      name: comment.name,
      text: comment.text,
      date: GetDate(),
    };

    const newComments = [newComment, ...comments];

    setComments(newComments);

    localStorage.setItem("commentsArr", JSON.stringify(newComments));
  }

  function removeComment(id) {
    const newComments = comments.filter((comment) => comment.id !== id);

    setComments(newComments);

    localStorage.setItem("commentsArr", JSON.stringify(newComments));
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div className="wrapper">
        <h1 className="title">react__comments-app</h1>

        <h2 className="subtitle">Your comment:</h2>
        <AddComment onCreate={addNewComment} />

        <h2 className="subtitle">List of comments:</h2>
        {comments.length ? (
          <ListComments comments={comments} />
        ) : (
          <p className="emptyCommenstList">
            Here are no comments. Write the first comment.
          </p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
