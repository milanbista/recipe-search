import React, { useState } from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

import foodImage from "../images/food.png";
import greenLeaf from "../images/green1.png";
import foodPlate from "../images/foodPlate.png";
import pizza from "../images/pizza.png";
import juice from "../images/juice.png";
import coffee from "../images/coffee.png";

const HomePage = ({ setHomeRecipe }) => {
  const [recipename, setRecipename] = useState("");

  return (
    <div className="main-container">
      <div className="yellow-disk">
        <img src={foodImage}></img>
        <div className="food-slogan">
          <h1>
            HEALTHY EATING
            <br />
            STARTS AT
            <h1 id="home-text">HOME</h1>
          </h1>
        </div>
      </div>

      <div className="section">
        <img src={greenLeaf}></img>
      </div>

      <div className="food-facts">
        <h2>
          Access to Over 500,000+
          <br />
          Recipes At Your
          <br />
          Finger Tips!
        </h2>

        <div className="sample-food">
          <img src={foodPlate}></img>
          <img src={pizza}></img>
          <img src={coffee}></img>
          <img src={juice}></img>
        </div>
      </div>

      <div className="food-search-btn">
        <form>
          <Link
            to={{
              pathname: "/recipe",
              pathValue: "Hello ",
            }}
          >
            <button className="search-btn" type="submit">
              START COOKING!
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
