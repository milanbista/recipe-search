import React, { useEffect, useState } from "react";
import "../styles/RecipePage.css";
import Recipe from "./Recipe";

import greenLeaf from "../images/green1.png";
import foodPlate from "../images/foodPlate.png";

const RecipePage = ({ recipeName }) => {
  // const APP_ID = "67b5aebc";
  // const APP_KEY = "5be24506fe17a351f08ad8bf32f9f24b	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [food, setFood] = useState("mushroom");
  const [reindex, setReindex] = useState(0);

  useEffect(() => {
    console.log(`The current recipe is ${recipeName}`);
    getRecipe();
  }, [food]);

  const getRecipe = async () => {
    setRecipes([]);

    const response = await fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setFood(search);
    setSearch("");
    console.log("demo ");
  };

  const findRecipeIndex = (index) => {
    setReindex(index);
  };

  return (
    <div className="container">
      <div className="search-div">
        <form className="search-form" onSubmit={submitSearch}>
          <input
            className="search-bar"
            placeholder="Seach food here..."
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipe-detail">
        <img src={foodPlate}></img>
        <ul className="itemDetails">
          {recipes.map((recipe, i) => {
            if (reindex == i) {
              return (
                <li key={i}>
                  <h3>Recipe: {recipe.recipe.label}</h3>
                  <h3>Calories: {recipe.recipe.calories} Calories</h3>
                  <h3>DietLabel: {recipe.recipe.dietLabels}</h3>
                  <h3>HealthLabel: {recipe.recipe.healthLabels}</h3>
                  <h3>Ingredients: {recipe.recipe.ingredientLines}</h3>
                  <h3>Cautions: {recipe.recipe.cautions}</h3>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            image={recipe.recipe.image}
            label={recipe.recipe.label}
            dietLabel={recipe.recipe.dietLabels}
            index={index}
            findRecipeIndex={findRecipeIndex}
          ></Recipe>
        ))}
      </div>
      <img src={greenLeaf}></img>
    </div>
  );
};

export default RecipePage;
