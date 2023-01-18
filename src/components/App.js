import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [ isSelected, setIsSelected] = useState("All")
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")
  const [newTasks, setNewTasks] = useState([...TASKS])

  function handleFormDetails(event) {
    setDetails(event.target.value)
  }
  function handleFormCategory(event) {
    setCategory(event.target.value)
  }
  function onTaskFormSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: details,
      category: category
    }
    console.log(newTask)
    setNewTasks([...TASKS, newTask])
  }
  console.log(newTasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} isSelected={isSelected} setIsSelected={setIsSelected}/>
      <NewTaskForm categories={CATEGORIES} handleFormCategory={handleFormCategory} handleFormDetails={handleFormDetails}
      onTaskFormSubmit={onTaskFormSubmit}
      details={details} category={category}/>
      <TaskList categories={CATEGORIES} tasks={newTasks} isSelected={isSelected} />
    </div>
  );
}

export default App;
