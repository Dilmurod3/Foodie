import React from "react";
import "./MainSlider.css";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";

function MainSlider() {
  return (
    <div className="MainSlider">
      <div className="MainSlider__Container">
        <div className="MainInfo">
          <h1>
            <span>P</span>izza
          </h1>
          <p>Italian recipe</p>
          <p>with pepperoni and </p>
          <p>mozzarella cheese</p>
          <button className="MoreInfo__btn">Show recipe</button>
        </div>
        <div className="MainSlider__Icons">
          <RadioButtonCheckedRoundedIcon />
          <RadioButtonCheckedRoundedIcon />
          <RadioButtonCheckedRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
