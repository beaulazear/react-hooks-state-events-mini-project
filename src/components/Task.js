import React from "react";

function Task({ category, task }) {

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
