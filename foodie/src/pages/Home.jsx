import React from "react";
import "./Home.css";
import MainSlider from "../components/main-slider/MainSlider";
import Recipes from "../Backend.js";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import pizza from "../img/recipes-img/pizza.png";

function Home(props) {
  return (
    <div className="HomePage">
      <MainSlider />
      <div className="Container">
        <h2 className="Headline__tittle">
          <span>P</span>opular recipes
        </h2>
        <div className="Recipe__Wrapper">
          {Recipes.map((recipesObject) => (
            <RecipeBoxes
              image={recipesObject.image}
              tittle={recipesObject.tittle}
            />
          ))}
        </div>
        <h2 className="Headline__tittle">
          <span>F</span>ast Foods
        </h2>
        <div className="Recipe__Wrapper">
          <RecipeBoxes />
        </div>
        <h2 className="Headline__tittle">
          <span>C</span>akes, Pies
        </h2>
        <div className="Recipe__Wrapper">
          <RecipeBoxes />
        </div>
        <h2 className="Headline__tittle">
          <span>D</span>rinks
        </h2>
        <div className="Recipe__Wrapper">
          <RecipeBoxes />
        </div>
      </div>
    </div>
  );
}

export default Home;

function RecipeBoxes(props) {
  return (
    <div className="BoxWrapper">
      <div
        className="BoxImg"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="BoxTittle">
        <p>{props.tittle}</p>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}
