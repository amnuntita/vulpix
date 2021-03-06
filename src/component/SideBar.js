import React from "react";
import { Link } from "react-router-dom";

import { Label } from "reactstrap";

import Search from "./SearchComponent.js";

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <Label>search box</Label>
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Search />
      </nav>
    </div>
  );
};

export default SideBar;
