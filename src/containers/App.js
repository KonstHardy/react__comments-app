import React from "react";
import Context from "../context";
import ListComments from "../components/listComments";
import AddComment from "../components/addComment";
import GetDate from "../components/getDate";
import "./App.css";

function App() {
  const defaultComments = [
    {
      id: 3,
      name: "Iron Man",
      text: "Yeah it is.",
      date: GetDate(),
    },
    {
      id: 2,
      name: "Professor Hulk",
      text: "No, man! React is really cool!",
      date: GetDate(),
    },
    {
      id: 1,
      name: "Peter Parker",
      text: "React is too hard :(",
      date: GetDate(),
    },
  ];

  let savedComments;

  try {
    savedComments =
      JSON.parse(localStorage.getItem("arrayComments")) || defaultComments;
  } catch (error) {
    savedComments = [];
    localStorage.removeItem("arrayComments");
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

    localStorage.setItem("arrayComments", JSON.stringify(newComments));
  }

  function removeComment(id) {
    const newComments = comments.filter((comment) => comment.id !== id);

    setComments(newComments);

    localStorage.setItem("arrayComments", JSON.stringify(newComments));
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div className="wrapper">
        <h1 className="title">react__comments-app</h1>
        <AddComment onCreate={addNewComment} />
        <ListComments comments={comments} />
      </div>
    </Context.Provider>
  );
}

export default App;
