import React from "react";
import "../styles/Recipe.css";

const Recipe = ({ image, label, dietLabel, index, findRecipeIndex }) => {
  const recipeClicked = () => {
    findRecipeIndex(index);
  };
  return (
    <div className="item item1" onClick={recipeClicked}>
      <img src={image}></img>
      <h3>{label}</h3>
      <button>View Recipe</button>
    </div>
  );
};

export default Recipe;
