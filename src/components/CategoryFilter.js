import React from "react";

function CategoryFilter({ categories, isSelected, setIsSelected }) {

  function handleClick(event) {
    setIsSelected(event.target.innerHTML)
  }

  return (
      <div className="categories">
        <h5>Category filters</h5>
        <ul>
          {
            categories.map((elem) => {
              return <button className={(elem === isSelected ? "selected" : "")} key={elem} onClick={handleClick}>{elem}</button>
            })
          }
        </ul>
      </div>
  );
}

export default CategoryFilter;
