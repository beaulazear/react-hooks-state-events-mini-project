import React from "react";
import Task from "./Task";

function TaskList({ tasks, isSelected }) {

  const filterTasks = tasks.filter((elem) => {
    if (isSelected === "All") return true;
    return isSelected === elem.category;

  })

  return (
    <div className="tasks">
      <ul>
        {
          filterTasks.map((elem, index) => {
            return <Task key={index} category={elem.category} task={elem.text} />
          })
        }
      </ul>
    </div>
  );
}

export default TaskList;
