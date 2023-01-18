import React from "react";

function NewTaskForm({ categories, handleFormCategory, handleFormDetails, onTaskFormSubmit, details, category}) {

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleFormDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleFormCategory}>
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onTaskFormSubmit} />
    </form>
  );
}

export default NewTaskForm;
