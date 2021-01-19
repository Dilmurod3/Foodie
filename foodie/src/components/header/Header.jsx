import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { NavLink } from "react-router-dom";
import Categories from "./Categories";

function Header() {
  return (
    <div className="TopBar">
      <div className="SiteLogo"></div>
      <ul className="TopBar__Links">
        <li>
          <NavLink
            exact
            to="/"
            className="HeaderLinks"
            activeClassName="Link__active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className="HeaderLinks"
            activeClassName="Link__active"
          >
            Favourites
          </NavLink>
        </li>
        <li activeClassName="Link__active">
          Categories <ArrowDropDownIcon />
        </li>
      </ul>
      <div className="TopBar__Container">
        <div className="TopBar__Search">
          <input type="search" placeholder="Search" />
          <SearchIcon />
        </div>
        <button className="TopBar__btn">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
